<script setup lang="ts">
import Filter from '@/assets/icons/filter.svg'
import Sort from '@/assets/icons/sort.svg'
import CustomButtom from '@/components/common/CustomButtom.vue'
import CustomSearch from '@/components/common/CustomSearch.vue'
import CustonButtonV2 from '@/components/common/CustonButtonV2.vue'
import Typography from '@/components/common/Typography.vue'
import { ref, watch } from 'vue'

interface IProps {
  isInputLoading: boolean
}
interface IEmits {
  'update:query': [string]
}
defineProps<IProps>()
const emits = defineEmits<IEmits>()
const query = ref('')

watch(query, () => {
  emits('update:query', query.value)
})
</script>

<template>
  <div class="listHeader">
    <Typography type="h2">
      Учебные сессии
    </Typography>

    <div class="listHeader__controls">
      <CustomSearch v-model="query" :is-loading="isInputLoading" />

      <CustonButtonV2 :icon="Sort" />
      <CustonButtonV2 :icon="Filter" />

      <CustomButtom label="Создать" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.listHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__controls {
    display: flex;
    align-items: center;
    gap: 14px;
  }

}
</style>
