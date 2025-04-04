<script setup lang="ts">
import type { Component } from 'vue'

interface IProps {
  icon: Component
}
interface IEmits {
  onclick: Function
}

defineProps<IProps>()
defineEmits<IEmits>()
</script>

<template>
  <button class="buttonv2" @click="$emit('onclick')">
    <component :is="icon" class="buttonv2__icon" />
  </button>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/colors";

.buttonv2 {
  display: flex;
  border: none;
  background: colors.$sc_base-12;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
}
</style>
