<script setup lang="ts">
import Exit from '@/assets/icons/exit.svg'
import CustomSelect from '@/components/common/Sidebar/CustomSelect.vue'
import ProfileCard from '@/components/common/Sidebar/ProfileCard.vue'
import SidebarOption from '@/components/common/Sidebar/SidebarOption.vue'
import Typography from '@/components/common/Typography.vue'
</script>

<template>
  <div class="sidebarBottom">
    <ProfileCard />

    <div class="sidebarBottom__controls">
      <SidebarOption :is-selected="false" label="Выйти" :icon="Exit" as="btn" />

      <CustomSelect default-value="Русский" />
    </div>

    <Typography type="sub" classnames="version">
      Версия 1.02
    </Typography>
  </div>
</template>

<style lang="scss" scoped>
.version {
 color: #2F3144A6;
}

.sidebarBottom {
  display: flex;
  flex-direction: column;
  gap: 18px;

  &__controls {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}
</style>
