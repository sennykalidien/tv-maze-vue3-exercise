<script lang="ts" setup>
const colorMode = useColorMode();
</script>

<template>
  <select
    v-model="colorMode.preference"
    class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
  >
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
</template>
