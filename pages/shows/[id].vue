<script lang="ts" setup>
const route = useRoute();
const id = ref(route.params.id) as unknown as string;
</script>

<template>
  <CommonLayoutPage>
    <template #page-header>
      <CommonPageHeader>
        <h1>TV Show</h1>
      </CommonPageHeader>
    </template>

    <CommonContainer class="my-10">
      <ShowDetail :show-id="id" />
    </CommonContainer>
  </CommonLayoutPage>
</template>
