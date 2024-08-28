<script lang="ts" setup>
import { categorizeByGenre, sortByRating } from "~/utils/data";
import { mutateData } from "~/utils";
import type { Show } from "~/types/shows";

const { data: apiData, pending, error } = await useTvmazeData<Show[] | null>("/shows");

const data = computed(() => {
  if (!apiData.value) return [];

  return categorizeByGenre(sortByRating(mutateData(apiData.value)));
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
        <template v-if="data.length > 0">
          <section v-for="(category, index) in data" :key="`tv-show-category-${index}`" class="py-10">
            <template v-for="(value, key) in category" :key="`tv-show-category-name-${key}`">
              <header class="text-center mb-10">
                <h2 class="font-bold text-lg capitalize text-primary">{{ key }}</h2>
              </header>
              <OverviewHorizontalScroll :items="value" />
            </template>
          </section>
        </template>
      </div>
    </template>
  </content-loader>
</template>
