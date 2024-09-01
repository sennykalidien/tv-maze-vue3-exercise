<script lang="ts" setup>
/**
 * Shows list component
 * consumes the useShowsSearchedList composable
 * and renders the overview component
 * @prop {String} searchQuery - search query
 */
import { useShowsSearchedList } from "~/composables";

interface Props {
  searchQuery: string;
}

const props = defineProps<Props>();
const { data, loading, error } = useShowsSearchedList({ searchQuery: props.searchQuery})
</script>

<template>
  <ContentLoader :data="data" :error="error" :loading="loading">
    <Overview :items="data" />
  </ContentLoader>
</template>
