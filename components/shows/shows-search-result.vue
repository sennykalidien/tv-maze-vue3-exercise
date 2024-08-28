<script lang="ts" setup>
import { sortByRating } from "~/utils/data";
import { mutateData } from "~/utils";
import type { ShowSearch } from "~/types/shows";

interface Props {
  searchQuery: string;
}

const props = defineProps<Props>();

console.log(props.searchQuery);

const {
  data: apiData,
  pending,
  error,
} = await useTvmazeData<ShowSearch[] | null>(`/search/shows?q=${props.searchQuery}`);

const data = computed(() => {
  if (!apiData.value) return [];
  const shows = apiData.value.map((show) => show.show);

  return sortByRating(mutateData(shows));
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
