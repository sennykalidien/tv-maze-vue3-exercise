<template>
  <LayoutPage>
    <template #page-header>
      <PageHeader>
        <h1>TV Shows</h1>
      </PageHeader>
    </template>

    <Container class="my-10">
      <ShowsList :limit="25" />
    </Container>
  </LayoutPage>
</template>
<script setup lang="ts">
</script>
