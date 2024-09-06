<template>
  <div class="flex flex-col justify-between min-h-full h-full">
    <header>
      <CommonContainer>
        <slot name="base-header" />
      </CommonContainer>
    </header>
    <main>
      <slot />
    </main>
    <footer class="py-10 bg-gray-950 mt-auto">
      <CommonContainer>
        <slot name="base-footer" />
      </CommonContainer>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>
