<script lang="ts" setup>
interface IProps {
  weight?: number | undefined
  size?: number | undefined
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'sub'
  classnames?: string
}
defineProps<IProps>()
</script>

<template>
  <component
    :is="type || 'h1'" :class="`typography ${classnames}`" :style="{
      'font-weight': weight,
      'font-size': size,
    }"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/colors';

.typography {
  color: colors.$sc_base-1;
}

h2 {
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
  vertical-align: middle;
  letter-spacing: 0;
}

span {
  font-weight: 800;
  font-size: 15px;
  line-height: 24px;
  vertical-align: middle;
  letter-spacing: 0;
}

sub {
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0;
}
</style>
