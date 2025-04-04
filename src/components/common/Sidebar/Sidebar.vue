<script setup lang="ts">
import Logo from '@/assets/icons/logo.svg'
import SidebarWrap from '@/assets/icons/sidebar-wrap.svg'
import SidebarBottom from '@/components/common/Sidebar/SidebarBottom.vue'
import SidebarOption from '@/components/common/Sidebar/SidebarOption.vue'
import Typography from '@/components/common/Typography.vue'
import { options } from '@/utils/sidebar-options'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isSidebarWrapped = ref(false)
const isShowAnimation = ref(false)
watch(isShowAnimation, () => {
  if (isShowAnimation.value) {
    setTimeout(() => isShowAnimation.value = false, 300)
  }
})
</script>

<template>
  <aside
    class="sidebar" :class="{
      sidebar_wrapped: isSidebarWrapped,
      sidebar_show: isShowAnimation,
    }"
  >
    <div
      class="sidebar__icon" :class="{
        sidebar__icon_wrapped: isSidebarWrapped,
      }" @click="() => {
        if (isSidebarWrapped) {
          isShowAnimation = false
          isShowAnimation = true
        }
        isSidebarWrapped = !isSidebarWrapped
      }"
    >
      <SidebarWrap />
    </div>

    <div class="sidebar__logo">
      <Logo />

      <Typography type="h2">
        Сим Центр
      </Typography>
    </div>

    <div class="sidebar__content">
      <ul class="sidebar__options">
        <li v-for="(item, idx) in options" :key="idx">
          <SidebarOption :label="item.label" :icon="item.icon" :is-selected="route.fullPath === item.link" :link="item.link" />
        </li>
      </ul>

      <div class="sidebar__bottom">
        <SidebarBottom />
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/colors";

.sidebar {
  background: colors.$sc_base-6;
  padding: 0 12px 19px 12px;
  display: flex;
  flex-direction: column;
  max-width: 274px;
  width: 100%;
  position: relative;
  transition: width 0.3s linear;

  &__content {
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &_show {
    animation: .3s linear show forwards;
  }

  &_wrapped {
    width: 0;

    .sidebar__logo, .sidebar__options, .sidebar__bottom {
      animation: .3s linear hide forwards;
    }
  }

  &__icon {
    display: block;
    position: absolute;
    top: 30px;
    left: calc(100% - 12px);
    cursor: pointer;
    transform: rotate(0deg);
    transition: transform 0.3s linear;

    &_wrapped {
      transform: rotate(180deg);
    }
  }

  &__options {
    display: flex;
    flex-direction: column;
    gap: 4px;
    list-style: none;
  }

  &__logo {
    display: flex;
    gap: 14px;
    align-items: center;
    padding: 19px 0;
    margin-left: 29px;
  }

  &__bottom {
    margin-top: auto;
    padding-top: 20px;
  }
}

@keyframes hide {
  0% {
    opacity: 1;
  }

  30% {
    opacity: 0;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes show {
  0% {
    visibility: hidden;
    opacity: 0;
  }

  80% {
    visibility: visible;
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
