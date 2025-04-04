<script setup lang="ts">
import WithAside from '@/components/layouts/WithAside.vue'
</script>

<template>
  <header />

  <main>
    <WithAside>
      <router-view />
    </WithAside>
  </main>
</template>
