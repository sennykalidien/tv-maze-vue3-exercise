<script lang="ts" setup>
/**
 * Shows list component
 * consumes the useShowsList composable
 * renders the overview component
 */
import { useShowsList } from "~/composables/useShowsList";

const { data, loading, error } =  useShowsList()
</script>

<template>
  <content-loader :data="data" :error="error" :loading="loading">
    <overview :items="data.slice(0, 10)" />
  </content-loader>
</template>
