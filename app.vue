<script setup lang="ts">
import AppConfig from "./appConfig";

useHead({
  title: AppConfig.title,
});
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <LayoutBase>
      <template #base-header>
        <Header />
      </template>

      <NuxtPage />

      <template #base-footer>
        <Footer />
      </template>
    </LayoutBase>
  </NuxtLayout>
</template>

<style>
@import "./main.scss";
</style>
