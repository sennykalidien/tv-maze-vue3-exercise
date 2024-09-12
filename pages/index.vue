<script lang="ts" setup>
const loading = ref(true);
setTimeout(() => (loading.value = false), 1000);
</script>

<template>
  <CommonLayoutPage>
    <template v-if="loading">
      <CommonSplashScreen />
    </template>
    <template v-else>
      <ShowsListCategorized />
    </template>
  </CommonLayoutPage>
</template>
