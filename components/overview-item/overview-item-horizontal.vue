<script lang="ts" setup>
import type { OverviewItem } from "~/types";

interface Props {
  item: OverviewItem;
}

defineProps<Props>();
</script>

<template>
  <div class="flex gap-10 items-center">
    <figure>
      <NuxtImg class="object-cover h-12 w-12" :src="item.image" loading="lazy" />
    </figure>
    <header class="flex items-center">
      <h2 class="text-lg capitalize text-primary">
        {{ item.title }}
      </h2>
    </header>
  </div>
</template>
