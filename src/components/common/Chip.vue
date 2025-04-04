<script setup lang="ts">
interface IProps {
  label: string
  type: 'plan' | 'active' | 'done'
}

defineProps<IProps>()
</script>

<template>
  <div
    class="chip" :class="{
      chip_plan: type === 'plan',
      chip_active: type === 'active',
      chip_done: type === 'done',
    }"
  >
    {{ label }}
  </div>
</template>

<style lang="scss" scoped>
.chip {
  padding: 4px 12px;
  border-radius: 43px;
  width: fit-content;
  font-weight: 500;

  &_plan {
    background: #AFBFF5;
  }

  &_active {
    background: #FFDAA1;
  }

  &_done {
    background: #91C893;
  }
}
</style>
