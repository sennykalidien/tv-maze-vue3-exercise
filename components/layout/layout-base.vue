<template>
  <header class="container mx-auto">
    <slot name="base-header" />
  </header>
  <main>
    <slot name="base-content" />
  </main>
  <footer class="container mx-auto py-10 px-4">
    <slot name="base-footer" />
  </footer>
</template>

<script setup lang="ts"></script>
