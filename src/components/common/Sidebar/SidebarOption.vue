<script lang="ts" setup>
import type { Component } from 'vue'
import Typography from '@/components/common/Typography.vue'
import { RouterLink } from 'vue-router'

defineProps<IProps>()

const componentMap = {
  btn: 'div',
  link: RouterLink,
}
interface IBase {
  label: string
  isSelected?: boolean
  icon?: Component
}
interface ILink {
  link: string
  as?: 'link'
}
interface IBtn {
  as: 'btn'
  link?: never
}
type IProps = IBase & (ILink | IBtn)
</script>

<template>
  <component
    :is="componentMap[as] || RouterLink"
    :to="link || '/'" class="sidebarOptionContainer" :class="{
      sidebarOptionContainer_selected: isSelected,
    }"
  >
    <component :is="icon" v-if="!!icon" class="sidebarOptionContainer__icon" />

    <Typography
      type="span" classnames="sidebarOption"
    >
      {{ label }}
    </Typography>
  </component>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/colors';

.sidebarOptionContainer {
  display: flex;
  align-items: center;
  padding: 12px 0 12px 12px;
  border-radius: 16px;
  cursor: pointer;
  width: 100%;
  text-decoration: none;

  &:hover {
    background: #F4F4F4;
  }

  &_selected:hover {
    background-color: #3761F3;
  }

  &_selected {
    background-color: #3761F3;
    color: colors.$sc_base-12 !important;

    .sidebarOptionContainer__icon > * {
      fill: colors.$sc_base-12;
    }

    .sidebarOption {
      color: inherit;
    }
  }
}
.sidebarOption {
  margin-left: 12px;
}
</style>
