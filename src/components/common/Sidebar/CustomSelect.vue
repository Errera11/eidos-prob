<script lang="ts" setup>
import Row1 from '@/assets/icons/row1.svg'
import Russian from '@/assets/icons/russian.svg'
import Typography from '@/components/common/Typography.vue'

interface IProps {
  defaultValue: string
  options?: string[]
}
defineProps<IProps>()
</script>

<template>
  <div class="customSelect">
    <div class="customSelect__selectOption">
      <Russian />

      <Typography type="span">
        {{ defaultValue }}
      </Typography>
    </div>

    <Row1 />
  </div>
</template>

<style lang="scss" scoped>
.customSelect {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 12px;
  cursor: pointer;
  width: 100%;
  border: 1px solid #E0E0E0;

  &:hover {
    background: #F4F4F4;
  }

  &__selectOption {
    display: flex;
    gap: 12px;
  }
}
//.sidebarOption {
//  margin-left: 12px;
//
//  &_selected {
//    background-color: #3761F3;
//  }
//}
</style>
