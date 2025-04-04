<script setup lang="ts">
import type { FieldType } from '@/utils/table-data'
import CustomTable from '@/components/common/CustomTable/CustomTable.vue'
import Pagination from '@/components/common/Pagination.vue'
import Header from '@/components/pages/index/Sessions/Header.vue'
import { fetchData } from '@/utils/fetch-data'
import { TableHeader } from '@/utils/table-data'
import { ref, watch } from 'vue'

const curRows = ref([])
const isLoading = ref(false)
const query = ref('')
const curPage = ref(1)
const totalPages = ref(1)
const dateSort = ref(null)
const perPage = 11

function toggleSort(f: FieldType, v: boolean) {
  if (f === 'date') {
    dateSort.value = v
  }
}

watch([curPage], () => {
  const { data, totalPages: tp } = fetchData({
    curPage: curPage.value,
    perPage,
    dateSort: dateSort.value,
    query: query.value,
  })

  curRows.value = data
  totalPages.value = tp
}, { immediate: true })

watch([query, dateSort], () => {
  curPage.value = 1

  const { data, totalPages: tp } = fetchData({
    curPage: curPage.value,
    perPage,
    dateSort: dateSort.value,
    query: query.value,
  })

  curRows.value = data
  totalPages.value = tp
}, { immediate: false })
</script>

<template>
  <div class="sessions">
    <Header class="sessions__header" :is-input-loading="isLoading" @update:query="(q) => query = q" />

    <CustomTable :data="curRows" :headers="TableHeader" class="sessions__table" @sort="toggleSort">
      <template #footer>
        <Pagination
          :total-pages="totalPages"
          :current-page="curPage"
          :default-page="1"
          @page-change="(page) => curPage = page"
        />
      </template>
    </CustomTable>
  </div>
</template>

<style lang="scss" scoped>
.sessions {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
