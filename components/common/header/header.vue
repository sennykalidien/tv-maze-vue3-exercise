<template>
  <div class="py-6 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10">
    <NuxtLink to="/" class="shrink-0">
      <img src="/logo.png" alt="Logo" class="h-10" >
    </NuxtLink>
    <CommonSearch placeholder="Search TV Shows" />
    <div class="flex flex-col md:flex-row items-center gap-5 md:gap-10">
      <CommonMenu />
      <CommonDarkModeSwitcher />
    </div>
  </div>
</template>
