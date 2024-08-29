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

const { overviewLayout, switchLayout } = useOverviewLayoutSwitcher();

const classes = computed(() => {
  return {
    list: overviewLayout.value === OverviewLayout.Grid ? "flex gap-8 flex-wrap justify-between" : "",
    item: overviewLayout.value === OverviewLayout.Grid ? "w-[30ch]" : "w-full mb-5 last-of-type:mb-0",
  };
});
</script>

<template>
  <section>
    <div class="flex justify-between items-center p-5">
      <h2>Results</h2>
      <overview-layout-switcher @change="switchLayout" />
    </div>

    <ul v-if="items.length > 0" :class="classes.list">
      <li v-for="item in items" :key="item.id" :class="classes.item">
        <NuxtLink :to="item.url" class="h-full">
          <UCard class="h-full">
            <article>
              <template v-if="overviewLayout === OverviewLayout.List">
                <OverviewItemHorizontal :item="item" />
              </template>
              <template v-else>
                <OverviewItemVertical :item="item" />
              </template>
            </article>
          </UCard>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
