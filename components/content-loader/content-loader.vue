<script setup lang="ts" generic="T extends Record<string, any>">
import type { NuxtError } from "#app";

interface Props {
  data: T | null;
  loading: boolean;
  error: NuxtError | Error | null | undefined;
}

withDefaults(defineProps<Props>(), {
  data: null,
  loading: false,
  error: undefined,
});
</script>
<template>
  <!-- loading -->
  <template v-if="loading">
    <template v-if="$slots.loadingContent">
      <slot name="loadingContent" />
    </template>
    <template v-else> Loading... </template>
  </template>

  <!-- error -->
  <template v-if="error">
    <slot name="errorContent" />
  </template>

  <!-- content -->
  <template v-if="data">
    <slot name="content" />
  </template>
  <template v-else> No data has been found </template>
</template>
