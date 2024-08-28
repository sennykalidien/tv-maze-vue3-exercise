<script setup lang="ts">
useHead({
  title: "TV MAZE",
});
</script>

<template>
  <NuxtLayout>
    <LayoutBase>
      <template #base-header>
        <Header />
      </template>
      <template #base-content>
        <NuxtPage />
      </template>
      <template #base-footer>
        <Footer />
      </template>
    </LayoutBase>
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
