<script lang="ts" setup>
const route = useRoute();
const searchQuery = route.query.q as string;
</script>

<template>
  <CommonLayoutPage>
    <template #page-header>
      <CommonPageHeader>
        <h1>Search</h1>
        <p class="text-lg">Results for "{{ searchQuery }}"</p>
      </CommonPageHeader>
    </template>
    <CommonContainer class="my-10">
      <ShowsSearchResult :search-query="searchQuery" />
    </CommonContainer>
  </CommonLayoutPage>
</template>
