<script lang="ts" setup>
const loading = ref(true);
setTimeout(() => (loading.value = false), 1000);
</script>

<template>
  <LayoutPage>
    <template v-if="loading">
      <SplashScreen />
    </template>
    <template v-else>
      <ShowsListCategorized />
    </template>
  </LayoutPage>
</template>
