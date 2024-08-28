<script lang="ts" setup>
async function handleSearch(event: Event) {
  const queryValue = (event.currentTarget as HTMLInputElement).value;
  const urlParams = new URLSearchParams(`q=${queryValue}`);

  await navigateTo(`/search?${urlParams.toString()}`, {
    external: true,
  });
}
</script>

<template>
  <UInput type="search" placeholder="Search TV Shows" class="w-full" @keyup.enter="handleSearch" />
</template>
