<script lang="ts" setup>
const colorMode = useColorMode();
</script>

<template>
  <div class="py-4 px-4 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10">
    <div class="shrink-0 text-center">
      <NuxtLink to="/" class="inline-flex">
        <NuxtImg src="/logo.png" alt="Logo" class="h-10" />
      </NuxtLink>
    </div>
    <SearchInput placeholder="Search TV Shows" />
    <div class="flex items-center gap-5">
      <NuxtLink to="/shows" class="shrink-0">All shows</NuxtLink>
      <div>
        <select
          v-model="colorMode.preference"
          class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  </div>
</template>
