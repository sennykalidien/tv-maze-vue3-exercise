<script lang="ts" setup>
const route = useRoute();
const searchQuery = route.query.q as string;
</script>

<template>
  <LayoutPage>
    <template #page-header>
      <PageHeader>
        <h1>Search</h1>
        <p class="text-lg">Results for "{{ searchQuery }}"</p>
      </PageHeader>
    </template>
    <Container class="my-10">
      <ShowsSearchResult :search-query="searchQuery" />
    </Container>
  </LayoutPage>
</template>
