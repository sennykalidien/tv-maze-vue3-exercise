<script lang="ts" setup>
import { useShowsSearchList } from "~/composables";

interface Props {
  searchQuery: string;
}

const props = defineProps<Props>();
const { data, loading, error } = useShowsSearchList({ searchQuery: props.searchQuery})
</script>

<template>
  <content-loader :data="data" :error="error" :loading="loading">
    <overview :items="data" />
  </content-loader>
</template>
