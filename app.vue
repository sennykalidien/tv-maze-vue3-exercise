<script setup lang="ts">
import AppConfig from "./config/app.config";

useHead({
  title: AppConfig.title,
});
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <CommonLayoutBase>
      <template #base-header>
        <CommonHeader />
      </template>

      <NuxtPage />

      <template #base-footer>
        <CommonFooter />
      </template>
    </CommonLayoutBase>
  </NuxtLayout>
</template>

<style>
@import "./main.scss";
</style>
