<script lang="ts" setup>
/**
 * Overview Component
 * Overview Layout Switcher
 * Overview Grid <-> Overview List
 * @prop: items
 */
import { type OverviewItem, OverviewLayout } from "~/types";
import { useOverviewLayoutSwitcher } from "~/composables";

interface Props {
  items: OverviewItem[];
}

defineProps<Props>();

const { overviewLayout, switchLayout } = useOverviewLayoutSwitcher();
</script>

<template>
  <section>
    <div class="flex justify-between items-center p-5">
      <h2>Results</h2>
      <overview-layout-switcher @change="switchLayout" />
    </div>

    <template v-if="overviewLayout === OverviewLayout.Grid">
      <overview-grid :items="items" />
    </template>
    <template v-else-if="overviewLayout === OverviewLayout.List">
      <overview-list :items="items" />
    </template>
  </section>
</template>
