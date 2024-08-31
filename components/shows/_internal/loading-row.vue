<script setup lang="ts">
const skeletonClassess = 'flex-shrink-0 flex-grow-0 w-32 h-52'
</script>


<template>
  <section class="py-4">
    <!-- Title skeleton -->
    <USkeleton class="h-8 w-32 mb-4 mx-auto" />

    <!-- Row with vertical rectangles -->
    <ul class="flex gap-1">
      <li><USkeleton :class="skeletonClassess" /></li>
      <li><USkeleton :class="skeletonClassess" /></li>
      <li><USkeleton :class="skeletonClassess" /></li>
      <li><USkeleton :class="skeletonClassess" /></li>
      <li><USkeleton :class="skeletonClassess" /></li>
      <li><USkeleton :class="skeletonClassess" /></li>
      <li><USkeleton :class="skeletonClassess" /></li>
      <li><USkeleton :class="skeletonClassess" /></li>
      <li><USkeleton :class="skeletonClassess" /></li>
      <li><USkeleton :class="skeletonClassess" /></li>
      <li><USkeleton :class="skeletonClassess" /></li>
      <li><USkeleton :class="skeletonClassess" /></li>
      <li><USkeleton :class="skeletonClassess" /></li>
      <li><USkeleton :class="skeletonClassess" /></li>
      <li><USkeleton :class="skeletonClassess" /></li>
    </ul>
  </section>
</template>
