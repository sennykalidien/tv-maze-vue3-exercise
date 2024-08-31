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
const { data, loading, error } =  useShowsList()
const dataLimited = computed(() => props.limit && props.limit > 0 && data.value.slice(0, props.limit))
</script>

<template>
  <content-loader :data="data" :error="error" :loading="loading">
    <overview :items="dataLimited ? dataLimited : data" />
  </content-loader>
</template>
