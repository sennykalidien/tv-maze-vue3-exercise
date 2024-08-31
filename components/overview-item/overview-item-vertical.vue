<script lang="ts" setup>
import type { OverviewItem } from "~/types";

interface Props {
  item: OverviewItem;
}

defineProps<Props>()
</script>

<template>
  <div>
    <figure class="mb-2">
      <NuxtImg class="w-full" :src="item.image" loading="lazy" placeholder />
    </figure>
    <div>
      <header class="flex items-center">
        <h2 class="text-lg capitalize text-primary">
          {{ item.title }}
        </h2>
      </header>
    </div>
  </div>
</template>
