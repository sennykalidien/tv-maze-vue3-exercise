<script lang="ts" setup>
import { categorizeDataByGenre, sortDataByRating, mutateShowToData } from "~/utils";
import LoadingHorizontal from "~/components/shows/_internal/loading-horizontal.vue";
import type { Show } from "~/types";

const { data: apiData, pending, error } = await useTvmazeData<Show[] | null>("/shows");

const data = computed(() => {
  if (!apiData.value) return [];

  return categorizeDataByGenre(sortDataByRating(mutateShowToData(apiData.value)));
});
</script>

<template>
  <div class="mx-auto px-4">
    <content-loader :data="data" :error="error" :loading="pending">
      <template #loadingContent>
        <div class="container mx-auto">
          <LoadingHorizontal />
          <LoadingHorizontal />
          <LoadingHorizontal />
          <LoadingHorizontal />
        </div>
      </template>

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
    </content-loader>
  </div>
</template>
