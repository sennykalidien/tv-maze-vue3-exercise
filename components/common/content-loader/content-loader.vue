<script setup lang="ts" generic="TData extends Record<string, any> | Record<string, any>[]">
import type { NuxtError } from "#app";

interface Props {
  data: TData | null;
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
    <template v-else>Loading...</template>
  </template>

  <!-- error -->
  <template v-else-if="error">
    <template v-if="$slots.errorContent">
    <slot name="errorContent" />
    </template>
    <template v-else>
      An error has occurred while fetching data...
    </template>
  </template>

  <!-- content -->
  <template v-else-if="data">
    <slot />
  </template>

  <template v-else>
    No data has been found
  </template>
</template>
