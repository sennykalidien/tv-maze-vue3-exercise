<script lang="ts" setup>
/**
 * Overview List Component
 * child: OverviewItemHorizontal
 * @prop: items
 */
import type { OverviewItem } from "~/types/index.js";

interface Props {
  items: OverviewItem[];
}

defineProps<Props>();
</script>

<template>
  <ul>
    <li v-for="item in items" :key="`overview-list-item${item.id}`" class="w-full mb-5 last-of-type:mb-0">
      <NuxtLink :to="item.url" class="h-full">
        <UCard class="h-full">
          <article>
            <OverviewItemHorizontal :item="item" />
          </article>
        </UCard>
      </NuxtLink>
    </li>
  </ul>
</template>
