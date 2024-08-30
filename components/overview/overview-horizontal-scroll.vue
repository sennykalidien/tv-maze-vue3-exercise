<script lang="ts" setup>
/**
 * Overview Component
 * @prop: items
 */
import type { OverviewItem } from "~/types";

interface Props {
  items: OverviewItem[];
}

defineProps<Props>();
</script>

<template>
  <ul class="flex gap-1 overflow-x-auto py-3">
    <li v-for="item in items" :key="`tv-show-horizontal-item-${item.id}`" class="flex-shrink-0 flex-grow-0 w-32">
      <NuxtLink :to="item.url">
        <article>
          <figure>
            <NuxtImg class="w-full" :src="item.image" />
          </figure>
        </article>
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: inherit;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 2rem;
  background: #2e2e2e;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
