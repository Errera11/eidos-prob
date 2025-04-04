<script lang="ts" setup>
import Typography from '@/components/common/Typography.vue'

interface IProps {
  label: string
  type?: 'button' | 'submit'
}
interface IEmits {
  onclick: Function
}

defineProps<IProps>()
defineEmits<IEmits>()
</script>

<template>
  <button class="customButton" :type="type || 'button'" @click="$emit('onclick')">
    <Typography type="span" classnames="customButton__text">
      {{ label }}
    </Typography>
  </button>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/colors";

.customButton {
  display: flex;
  text-decoration: none;
  border: none;
  background: colors.$sc_base-7;
  padding: 10px 24px;
  border-radius: 12px;
  cursor: pointer;

  &__text {
    color: colors.$sc-base-6;
  }
}
</style>
