<script lang="ts" setup>
const route = useRoute();
const id = ref(route.params.id) as unknown as string;
</script>

<template>
  <LayoutPage>
    <template #page-header>
      <PageHeader>
        <h1>TV Show</h1>
      </PageHeader>
    </template>

    <Container class="my-10">
      <ShowDetail :show-id="id" />
    </Container>
  </LayoutPage>
</template>
