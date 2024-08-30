<script lang="ts" setup>
/**
 * ShowDetail component
 * Consumes the useShowDetail composable
 * Renders the OverviewItemDetail component
 * @prop showId - The show id
 */
import { useShowDetail } from "~/composables";

interface Props {
  showId: string;
}

const props = defineProps<Props>();
const { data, loading, error } = useShowDetail({ showId: props.showId });
</script>

<template>
  <content-loader :data="data" :error="error" :loading="loading">
    <section class="container mx-auto py-10 px-4">
      <OverviewItemDetail v-if="data" :item="data" />
    </section>
  </content-loader>
</template>
