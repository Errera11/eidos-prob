<script setup lang="ts">
import SearchIcon from '@/assets/icons/search.svg'
import Typography from '@/components/common/Typography.vue'

interface IProps {
  isLoading: boolean
}

defineProps<IProps>()
const model = defineModel()
</script>

<template>
  <div class="customSearch">
    <SearchIcon />

    <input v-if="!isLoading" v-model="model" placeholder="Поиск" class="customSearch__input">
    <Typography v-if="isLoading" type="span" :weight="500">
      Загрузка...
    </Typography>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/colors";

.customSearch {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 0 9px 16px;
  border: 1px solid colors.$sc_base-4;
  border-radius: 12px;
  width: 260px;

  &__input {
    border: none;
    background: inherit;
    outline: none;

    &:focus {
      border: none;
      outline: none;
    }

    &::placeholder {
      color: colors.$sc_base-1;
      font-weight: 500;
      font-size: 13px;
      line-height: 20px;
      font-family: Monrope, sans-serif;
    }
  }
}
</style>
