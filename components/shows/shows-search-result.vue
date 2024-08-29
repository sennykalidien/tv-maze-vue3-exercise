<script lang="ts" setup>
import { sortDataByRating, mutateShowToData } from "~/utils";
import type { SearchedShow } from "~/types";

interface Props {
  searchQuery: string;
}

const props = defineProps<Props>();

const {
  data: apiData,
  pending,
  error,
} = await useTvmazeData<SearchedShow[] | null>(`/search/shows?q=${props.searchQuery}`);

const data = computed(() => {
  if (!apiData.value) return [];
  const shows = apiData.value.map((show) => show.show);

  return sortDataByRating(mutateShowToData(shows));
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
      <Overview :items="data" />
    </template>
  </content-loader>
</template>
