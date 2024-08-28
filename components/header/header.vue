<script lang="ts" setup></script>

<template>
  <div class="py-4 px-4 flex justify-between items-center gap-10">
    <div class="shrink-0 text-center">
      <NuxtLink to="/" class="inline-flex">
        <img src="/logo.png" alt="Logo" class="h-10" />
      </NuxtLink>
    </div>
    <SearchInput />
    <NuxtLink to="shows" class="shrink-0">All shows</NuxtLink>
  </div>
</template>
