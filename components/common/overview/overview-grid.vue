<script lang="ts" setup>
/**
 * Overview Grid Component
 * child: OverviewItemVertical
 * @prop: items
 */
import type { OverviewItem } from "~/types";

interface Props {
  items: OverviewItem[];
}

defineProps<Props>();
</script>

<template>
  <ul class="flex gap-10 flex-wrap justify-between">
    <li v-for="item in items" :key="`overview-grid-item${item.id}`" class="w-[15ch]">
      <NuxtLink :to="item.url" class="h-full">
        <UCard class="h-full">
          <article>
            <CommonOverviewItemVertical :item="item" />
          </article>
        </UCard>
      </NuxtLink>
    </li>
  </ul>
</template>
