<script lang="ts" setup>
/**
 * Overview Component
 * @prop: items
 */
import { type OverviewItem, OverviewLayout } from "~/types";
import { useOverviewLayoutSwitcher } from "~/composables";

interface Props {
  items: OverviewItem[];
}

defineProps<Props>();

const { overviewLayout, handleOverviewLayoutSwitch } = useOverviewLayoutSwitcher();

const classes = computed(() => {
  return {
    list: overviewLayout.value === OverviewLayout.Grid ? "flex gap-8 flex-wrap justify-between" : "",
    item: overviewLayout.value === OverviewLayout.Grid ? "w-[30ch]" : "w-full mb-5 last-of-type:mb-0",
    detail: overviewLayout.value === OverviewLayout.Grid ? "" : "flex gap-10 items-center",
    detailImage: overviewLayout.value === OverviewLayout.Grid ? "w-full" : "object-cover h-12 w-12",
    detailMeta: overviewLayout.value === OverviewLayout.Grid ? "" : "hidden",
  };
});
</script>

<template>
  <section>
    <div class="flex justify-between items-center p-5">
      <h2>Results</h2>
      <overview-layout-switcher @change="handleOverviewLayoutSwitch" />
    </div>

    <ul v-if="items.length > 0" :class="classes.list">
      <li v-for="item in items" :key="item.id" :class="classes.item">
        <NuxtLink :to="item.url" class="h-full">
          <UCard class="h-full">
            <article :class="classes.detail">
              <NuxtImg :class="classes.detailImage" :src="item.image" />
              <div>
                <header class="flex items-center">
                  <h2 class="font-bold text-lg capitalize text-blue-300">
                    {{ item.title }}
                  </h2>
                </header>
                <div v-for="metaItem in item.metaList" :key="metaItem.name" :class="classes.detailMeta">
                  <p class="mb-1">{{ metaItem.name }}: {{ metaItem.value }}</p>
                </div>
              </div>
            </article>
          </UCard>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
