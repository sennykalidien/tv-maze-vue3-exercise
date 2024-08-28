<script lang="ts" setup>
const route = useRoute();
const id = ref(route.params.id) as unknown as string;
</script>

<template>
  <LayoutPage>
    <template #page-header>
      <h1>TV Shows</h1>
    </template>

    <ShowDetail :show-id="id" />
  </LayoutPage>
</template>
