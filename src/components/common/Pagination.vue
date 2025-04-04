<script setup lang="ts">
import PaginationLeft from '@/assets/icons/pagination-left.svg'
import { usePage } from '@/utils/usePage'
import { computed, ref, toRef, watch } from 'vue'

interface IProps {
  defaultPage: number
  totalPages: number
}
interface IEmits {
  pageChange: [number]
}

const props = defineProps<IProps>()

const emits = defineEmits<IEmits>()

const localTotalPages = ref(props.totalPages)

watch(() => props.totalPages, () => {
  localTotalPages.value = props.totalPages
})

const { setPage, setNextStep, setPrevStep, currentPage: localCurrentValue } = usePage({
  defaultPage: props.defaultPage || 1,
  totalPages: toRef(props, 'totalPages'),
})

watch(localCurrentValue, () => {
  emits('pageChange', localCurrentValue.value)
})

const pages = computed(() => {
  if (props.totalPages <= 4) {
    return Array.from({ length: props.totalPages - 1 }, (_, i) => i + 2)
  }
  else if (!pages.value) {
    return Array.from({ length: props.totalPages > 4 ? 4 : props.totalPages }, (_, i) => localCurrentValue.value + i + 1)
  }
  else if (props.totalPages === 1) {
    return pages.value
  }
  else if (localCurrentValue.value - 4 < 0 || props.totalPages <= 5) {
    return Array.from({ length: 4 }, (_, i) => i + 2)
  }
  else if (localCurrentValue.value + 4 > props.totalPages) {
    return Array.from({ length: 4 }, (_, i) => props.totalPages + i - 4)
  }
  else if (pages.value.indexOf(localCurrentValue.value) === 1 || pages.value.indexOf(localCurrentValue.value) === 2) {
    return pages.value
  }

  return Array.from({ length: 4 }, (_, i) => localCurrentValue.value + i - 1)
})
</script>

<template>
  <div class="pagination">
    <span class="pagination__navigation pagination__navigationLeft pagination__row" @click="setPrevStep()">
      <PaginationLeft />
    </span>

    <ul class="pagination__pages">
      <li
        class="pagination__navigation"
        :class="{
          pagination__navigation_active: localCurrentValue === 1,
        }" @click="setPage(1)"
      >
        1
      </li>
      <li v-if="3 < localCurrentValue && (localCurrentValue === 4 ? pages.indexOf(localCurrentValue) !== 2 : true) && props.totalPages > 5" class="pagination__navigation">
        ...
      </li>

      <li
        v-for="(item, idx) in pages"
        :key="idx"
        class="pagination__navigation" :class="{
          pagination__navigation_active: localCurrentValue === item,
        }" @click="setPage(item)"
      >
        {{ item }}
      </li>

      <li
        v-if="totalPages - 3 > localCurrentValue && props.totalPages > 5" class="pagination__navigation"
      >
        ...
      </li>
      <li
        v-if="props.totalPages > 5"
        class="pagination__navigation"
        :class="{
          pagination__navigation_active: localCurrentValue === totalPages,
        }"
        @click="setPage(totalPages)"
      >
        {{ totalPages }}
      </li>
    </ul>

    <span
      class="pagination__navigation pagination__row"
      @click="setNextStep"
    >
      <PaginationLeft />
    </span>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/colors";

.pagination {
  user-select: none;
  display: flex;
  align-items: stretch;
  flex-direction: row;
  gap: 8px;

  &__navigation {
    border: 1px solid transparent;
    line-height: 24px;
    padding: 2px 5px;
    width: 30px;
    text-align: center;
    background: colors.$sc_base-6;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &_active {
      color: colors.$sc_base-7;
      border: 1px solid colors.$sc_base-7;
    }

    &:hover {
      background: colors.$sc_base-4;
    }
  }

  &__navigationLeft {
    transform: rotate(180deg);
  }

  &__pages {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 8px;
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
