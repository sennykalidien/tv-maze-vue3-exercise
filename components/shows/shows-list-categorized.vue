<script lang="ts" setup>
import LoadingRow from "~/components/shows/_internal/loading-row.vue";
import { useShowsList } from "~/composables/useShowsList";

const { data, loading, error} = useShowsList({ categorized: true });
</script>

<template>
  <div class="mx-auto px-4">
    <content-loader :data="data" :error="error" :loading="loading">
      <template #loadingContent>
        <div class="container mx-auto">
          <LoadingRow />
          <LoadingRow />
          <LoadingRow />
          <LoadingRow />
        </div>
      </template>

        <template v-if="data.length > 0">
          <section v-for="(category, index) in data" :key="`tv-show-category-${index}`" class="py-5">
            <template v-for="(value, key) in category" :key="`tv-show-category-name-${key}`">
              <header class="text-center">
                <h2 class="font-bold text-2xl capitalize">{{ key }}</h2>
              </header>
              <overview-horizontal-scroll :items="value" />
            </template>
          </section>
        </template>
    </content-loader>
  </div>
</template>
