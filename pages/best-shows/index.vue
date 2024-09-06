<template>
  <CommonLayoutPage>
    <template #page-header>
      <CommonPageHeader>
        <h1>TV Shows</h1>
      </CommonPageHeader>
    </template>

    <CommonContainer class="my-10">
      <ShowsList :limit="25" />
    </CommonContainer>
  </CommonLayoutPage>
</template>
<script setup lang="ts">
</script>
