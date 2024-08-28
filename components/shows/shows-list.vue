<script lang="ts" setup>
import { sortByRating } from "~/utils/data";
import { mutateData } from "~/utils";
import type { Show } from "~/types/shows";

const { data: apiData, pending, error } = await useTvmazeData<Show[] | null>("/shows");

const data = computed(() => {
  if (!apiData.value) return [];

  return sortByRating(mutateData(apiData.value));
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
      <div class="container mx-auto">
        <Overview :items="data" />
      </div>
    </template>
  </content-loader>
</template>
