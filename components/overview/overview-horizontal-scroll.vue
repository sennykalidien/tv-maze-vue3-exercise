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
  <ul class="flex gap-10 overflow-x-auto py-10">
    <li v-for="item in items" :key="`tv-show-horizontal-item-${item.id}`" class="basis-200 flex-shrink-0 flex-grow-0">
      <UCard>
        <NuxtLink :to="item.url">
          <article>
            <figure class="mb-2">
              <NuxtImg class="image" :src="item.image" />
            </figure>
            <header class="mb-2">
              <h2 class="font-bold text-lg capitalize text-blue-300">
                {{ item.title }}
              </h2>
            </header>
            <div v-for="metaItem in item.metaList" :key="metaItem.name">
              <p>{{ metaItem.name }}: {{ metaItem.value }}</p>
            </div>
          </article>
        </NuxtLink>
      </UCard>
    </li>
  </ul>
</template>
