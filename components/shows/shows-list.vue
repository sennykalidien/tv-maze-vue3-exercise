<script lang="ts" setup>
/**
 * Shows list component
 * consumes the useShowsListPaged composable
 * renders the overview component
 * renders a load more button if there are more pages
 */
import { useShowsListPaged } from "~/composables/useShowsList";

const { data, loading, error, hasNextPage, fetchNextPage, fetchingNextPage } =  useShowsListPaged()
</script>

<template>
  <content-loader :data="data" :error="error" :loading="loading">
    <overview :items="data" />

    <p v-if="fetchingNextPage" class="mt-10">Loading new shows...</p>
    <UButton :disabled="!hasNextPage" class="mt-10 disabled:bg-gray-600" @click="fetchNextPage">Load more</UButton>
  </content-loader>
</template>
