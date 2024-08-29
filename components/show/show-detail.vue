<script lang="ts" setup>
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
      <OverviewItemDetail :item="data[0]" />
    </section>
  </content-loader>
</template>
