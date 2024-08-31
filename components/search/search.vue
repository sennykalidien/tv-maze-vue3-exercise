<script lang="ts" setup>
interface Props {
  placeholder: string
  defaultValue: string
}

withDefaults(defineProps<Props>(), {
  placeholder: "Search",
  defaultValue: "",
})

const route = useRoute();
const searchQuery = route.query.q as string;

async function handleSearch(event: Event) {
  const queryValue = (event.currentTarget as HTMLInputElement).value;
  const urlParams = new URLSearchParams(`q=${queryValue}`);

  await navigateTo(`/search?${urlParams.toString()}`, {
    external: true,
  });
}
</script>

<template>
  <UInput type="search" :placeholder="placeholder" class="w-full" :model-value="searchQuery" @keyup.enter="handleSearch" />
</template>
