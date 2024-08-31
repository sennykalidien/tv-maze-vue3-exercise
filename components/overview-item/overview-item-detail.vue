<script lang="ts" setup>
import type { OverviewItem } from "~/types";

interface Props {
  item: OverviewItem;
}

defineProps<Props>()
</script>


<template>
  <article>
    <header class="mb-8">
      <h2 class="font-bold text-3xl capitalize">
        {{ item.title }}
      </h2>
    </header>
    <div class="md:flex md:gap-10">
      <figure class="mb-2 w-[300px] shrink-0">
        <NuxtImg class="w-full" :src="item.image" loading="lazy" placeholder />
      </figure>
      <ul>
        <li v-for="metaItem in item.metaList" :key="metaItem.name" class="mb-5 last-of-type:mb-0">
          <h3 class="text-xl">{{ metaItem.name }}</h3>
          <p class="mt-0">{{ metaItem.value }}</p>
        </li>
      </ul>
    </div>
  </article>
</template>
