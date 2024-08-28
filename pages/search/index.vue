<script lang="ts" setup>
const route = useRoute();
const searchQuery = route.query.q as string;
</script>

<template>
  <LayoutPage>
    <template #page-header>
      <h1>Search Results</h1>
    </template>
    <div class="container mx-auto">
      <ShowsSearchResult :search-query="searchQuery" />
    </div>
  </LayoutPage>
</template>
