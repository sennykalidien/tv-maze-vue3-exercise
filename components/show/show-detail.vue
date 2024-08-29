<script lang="ts" setup>
import { sortDataByRating, mutateShowToData } from "~/utils";
import type { Show } from "~/types";

interface Props {
  showId: string;
}

const props = defineProps<Props>();

const { data: apiData, pending, error } = await useTvmazeData<Show | null>(`/shows/${props.showId}`);

const data = computed(() => {
  if (!apiData.value) return [];

  return sortDataByRating(mutateShowToData([{ ...apiData.value }]));
});
</script>

<template>
  <content-loader :data="data" :error="error" :loading="pending">
    <template #errorContent>
      <p>An error has occurred</p>
    </template>
    <template #loadingContent>
      <div>Skeleton loader</div>
    </template>
    <template #content>
      <div class="container mx-auto py-10 px-4">
        <article>
          <OverviewItemDetail :item="data[0]" />
        </article>
      </div>
    </template>
  </content-loader>
</template>
