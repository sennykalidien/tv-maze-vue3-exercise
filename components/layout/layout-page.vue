<template>
  <section>
    <header v-if="$slots['page-header']" class="bg-primary text-center py-10">
      <slot name="page-header" />
    </header>
    <div v-if="$slots.default">
      <slot />
    </div>
    <footer v-if="$slots['page-footer']">
      <slot name="page-footer" />
    </footer>
  </section>
</template>

