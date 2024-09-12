<script lang="ts" setup>
/**
 * Shows list component
 * consumes the useShowsList composable
 * renders the overview component
 */
import { useShowsList } from "~/composables/useShowsList";

interface Props {
  limit?: number;
}

const props = defineProps<Props>()
const { data, loading, error } =  useShowsList({ limit: props.limit })
</script>

<template>
  <CommonContentLoader :data="data" :error="error" :loading="loading">
    <CommonOverview :items="data" />
  </CommonContentLoader>
</template>
