<script lang="ts" setup>
import { sortByRating } from "~/utils/data";
import { mutateData } from "~/utils";
import type { Show } from "~/types/shows";

interface Props {
  showId: string;
}

const props = defineProps<Props>();

const { data: apiData, pending, error } = await useTvmazeData<Show | null>(`/shows/${props.showId}`);

const data = computed(() => {
  if (!apiData.value) return [];

  return sortByRating(mutateData([{ ...apiData.value }]));
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
      <div class="container mx-auto py-10">
        <article class="flex gap-10 items-center">
          <figure class="mb-2">
            <NuxtImg class="w-200" :src="data[0].image" />
          </figure>
          <div>
            <header class="mb-2">
              <h2 class="font-bold text-lg capitalize text-blue-300">
                {{ data[0].title }}
              </h2>
            </header>
            <div v-for="metaItem in data[0].metaList" :key="metaItem.name">
              <p>{{ metaItem.name }}: {{ metaItem.value }}</p>
            </div>
          </div>
        </article>
      </div>
    </template>
  </content-loader>
</template>
