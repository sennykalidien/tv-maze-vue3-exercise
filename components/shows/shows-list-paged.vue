<script lang="ts" setup>
/**
 * Shows list component paged
 * consumes the useShowsListPaged composable
 * renders the overview component
 * renders a load more button if there are more pages
 */
import { useShowsListPaged } from "~/composables/useShowsList";

const { data, loading, error, hasNextPage, loadNextPage, loadingNextPage } =  useShowsListPaged()
</script>

<template>
  <ContentLoader :data="data" :error="error" :loading="loading">
    <Overview :items="data" />

    <!-- pagination -->
    <p v-if="loadingNextPage" class="mt-10">Loading new shows...</p>
    <UButton :disabled="!hasNextPage" class="mt-10 disabled:bg-gray-600" @click="loadNextPage">Load more</UButton>
  </ContentLoader>
</template>
