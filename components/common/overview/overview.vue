<script lang="ts" setup>
/**
 * Overview Component
 * Contains: Overview Layout Switcher & TODO: Pagination
 * Overview Grid <-> Overview List
 * @prop: items
 */
import { type OverviewItem, OverviewLayout } from "~/types";
import { useOverviewLayoutSwitcher } from "~/composables";

interface Props {
  items: OverviewItem[];
}

const props = defineProps<Props>();
const totalItems = computed(() => props.items.length)

const { overviewLayout, switchLayout } = useOverviewLayoutSwitcher();

</script>

<template>
  <section>
    <div class="flex justify-between items-center mb-5">
      <h2 class="text-lg">{{ totalItems }} Results</h2>
      <CommonOverviewLayoutSwitcher @change="switchLayout" />
    </div>

    <template v-if="overviewLayout === OverviewLayout.Grid">
      <CommonOverviewGrid :items="items" />
    </template>
    <template v-else-if="overviewLayout === OverviewLayout.List">
      <CommonOverviewList :items="items" />
    </template>
  </section>
</template>
