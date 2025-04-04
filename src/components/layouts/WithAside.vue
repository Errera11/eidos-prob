<script setup lang="ts">
import Sidebar from '@/components/common/Sidebar/Sidebar.vue'
</script>

<template>
  <div class="withAside">
    <Sidebar />

    <div class="withAside__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/colors";

.withAside {
  background: colors.$sc_base-5;
  display: flex;
  gap: 8px;
  flex-direction: row;
  flex-wrap: nowrap;
  max-height: 100%;

  &__content {
    overflow: hidden;
    height: 100vh;
    background: colors.$sc_base-6;
    margin-top: 8px;
    margin-right: 8px;
    padding: 24px 25px 0 25px;
    border-radius: 12px 12px 0 0;
    width: 100%;
    transition: width .3s ease-in-out;
  }
}
</style>
