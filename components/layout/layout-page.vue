<template>
  <section>
    <header v-if="$slots['page-header']" class="bg-primary text-center py-10">
      <slot name="page-header" />
    </header>
    <div>
      <slot />
    </div>
    <footer>
      <slot name="page-footer" />
    </footer>
  </section>
</template>

