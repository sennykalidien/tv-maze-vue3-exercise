<template>
  <div class="flex flex-col justify-between min-h-full h-full">
    <header>
      <Container>
        <slot name="base-header" />
      </Container>
    </header>
    <main>
      <slot />
    </main>
    <footer class="py-10 px-4 bg-gray-950 mt-auto">
      <Container>
        <slot name="base-footer" />
      </Container>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>
