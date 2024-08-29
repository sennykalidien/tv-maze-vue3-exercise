<script lang="ts" setup>
import { categorizeDataByGenre, sortDataByRating, mutateShowToData } from "~/utils";
import type { Show } from "~/types";

const { data: apiData, pending, error } = await useTvmazeData<Show[] | null>("/shows");

const data = computed(() => {
  if (!apiData.value) return [];

  return categorizeDataByGenre(sortDataByRating(mutateShowToData(apiData.value)));
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
      <div class="mx-auto">
        <template v-if="data.length > 0">
          <section v-for="(category, index) in data" :key="`tv-show-category-${index}`" class="py-5">
            <template v-for="(value, key) in category" :key="`tv-show-category-name-${key}`">
              <header class="text-center">
                <h2 class="font-bold text-2xl capitalize">{{ key }}</h2>
              </header>
              <OverviewHorizontalScroll :items="value" />
            </template>
          </section>
        </template>
      </div>
    </template>
  </content-loader>
</template>
