<template>
  <div class="py-6 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10">
    <NuxtLink to="/" class="shrink-0">
      <img src="/logo.png" alt="Logo" class="h-10" >
    </NuxtLink>
    <Search placeholder="Search TV Shows" />
    <div class="flex items-center gap-5">
      <NuxtLink to="/shows" class="shrink-0">All shows</NuxtLink>
      <DarkModeSwitcher />
    </div>
  </div>
</template>
