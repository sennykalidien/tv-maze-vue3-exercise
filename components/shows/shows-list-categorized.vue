<script lang="ts" setup>
/**
 * Shows list component
 * consumes the useShowsCategorizedList composable
 * and renders the overview-horizontal-scroll component
 * @prop {Array} data - list of shows
 */
import LoadingRow from "~/components/shows/_internal/loading-row.vue";
import { useShowsCategorizedList } from "~/composables/useShowsList";

const { data, loading, error} = useShowsCategorizedList();
</script>

<template>
  <content-loader :data="data" :error="error" :loading="loading">
    <template #loadingContent>
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
    </template>

    <template v-if="data.length > 0">
      <template v-for="(category, index) in data" :key="`tv-show-category-${index}`">
        <section v-for="(items, categoryName) in category" :key="`tv-show-category-name-${categoryName}`" class="py-5">
          <header class="text-center">
            <h2 class="font-bold text-2xl capitalize">{{ categoryName }}</h2>
          </header>
          <overview-horizontal-scroll :items="items" />
        </section>
      </template>
    </template>
  </content-loader>
</template>
