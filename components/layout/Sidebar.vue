<script lang="ts" setup></script>

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <Nuxtlink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="" class="w-40 h-20 mx-auto" />
    </Nuxtlink>
    <button class="absolute top-2 right-1 transition-colors hover:text-primary">
      <Icon name="line-md:logout" size="20" />
    </button>
    <LayoutMenu />
  </aside>
</template>
