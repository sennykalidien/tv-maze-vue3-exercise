<script lang="ts" setup>
import LoadingRow from "~/components/shows/_internal/loading-row.vue";
import { useShowsCategorizedList } from "~/composables/useShowsList";

const { data, loading, error} = useShowsCategorizedList();
</script>

<template>
  <div class="mx-auto">
    <content-loader :data="data" :error="error" :loading="loading">
      <template #loadingContent>
        <div class="container mx-auto overflow-hidden">
          <LoadingRow />
          <LoadingRow />
          <LoadingRow />
          <LoadingRow />
        </div>
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
  </div>
</template>
