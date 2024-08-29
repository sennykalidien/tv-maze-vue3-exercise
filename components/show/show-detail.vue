<script lang="ts" setup>
import { sortDataByRating } from "~/utils/data";
import { mutateShowToData } from "~/utils";
import type { Show } from "~/types/shows";

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
          <header class="mb-2">
            <h2 class="font-bold text-3xl capitalize">
              {{ data[0].title }}
            </h2>
          </header>
          <div class="md:flex md:gap-10">
            <figure class="mb-2 w-[300px] shrink-0">
              <NuxtImg class="w-full" :src="data[0].image" />
            </figure>
            <div>
              <div v-for="metaItem in data[0].metaList" :key="metaItem.name" class="mt-5 last-of-type:mt-0">
                <h3 class="text-xl">{{ metaItem.name }}</h3>
                <p class="mt-0">{{ metaItem.value }}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </template>
  </content-loader>
</template>
