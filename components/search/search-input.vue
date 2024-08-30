<script lang="ts" setup>
interface Props {
  placeholder: string
}

withDefaults(defineProps<Props>(), {
  placeholder: "Search",
})

async function handleSearch(event: Event) {
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
