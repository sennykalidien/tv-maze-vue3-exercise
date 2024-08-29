<script lang="ts" setup>
import { useShowsList } from "~/composables/useShowsList";

const { data, loading, error} = useShowsList({ categorized: false });
</script>

<template>
  <content-loader :data="data" :error="error" :loading="loading">
    <div class="container mx-auto">
      <overview :items="data" />
    </div>
  </content-loader>
</template>
