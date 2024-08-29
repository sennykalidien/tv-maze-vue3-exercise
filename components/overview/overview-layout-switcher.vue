<script setup lang="ts">
import { OverviewLayout } from "~/types";

const emits = defineEmits(["change"]);

function handleClick(event: MouseEvent, val: OverviewLayout) {
  event.preventDefault();

  emits("change", val);
}
</script>

<template>
  <div class="flex items-center gap-2">
    <a href="#" @click="(e) => handleClick(e, OverviewLayout.Grid)">
      <Icon name="material-symbols:grid-view" class="dark:text-white text-black" size="1.5rem" />
    </a>
    <a href="#" @click="(e) => handleClick(e, OverviewLayout.List)">
      <Icon name="material-symbols:list" class="dark:text-white text-black" size="1.5rem" />
    </a>
  </div>
</template>
