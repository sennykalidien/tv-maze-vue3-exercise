<script lang="ts" setup>
async function handleSearch(event: Event) {
  interface Props {
    placeholder: string
  }

  withDefaults(defineProps<Props>(), {
    placeholder: "Search",
  });

  const queryValue = (event.currentTarget as HTMLInputElement).value;
  const urlParams = new URLSearchParams(`q=${queryValue}`);

  await navigateTo(`/search?${urlParams.toString()}`, {
    external: true,
  });
}
</script>

<template>
  <UInput type="search" :placeholder="placeholder" class="w-full" @keyup.enter="handleSearch" />
</template>
