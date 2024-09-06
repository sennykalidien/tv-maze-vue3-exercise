<script lang="ts" setup>
/**
 * ShowDetail component
 * Consumes the useShowDetail composable
 * Renders the OverviewItemDetail component
 * @prop showId - the ID of the show needed for API request
 */
import { useShowDetail } from "~/composables";

interface Props {
  showId: string;
}

const props = defineProps<Props>();
const { data, loading, error } = useShowDetail({ showId: props.showId });
</script>

<template>
  <CommonContentLoader :data="data" :error="error" :loading="loading">
    <CommonOverviewItemDetail v-if="data" :item="data" />
  </CommonContentLoader>
</template>
