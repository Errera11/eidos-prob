<script setup lang="ts">
import type { FieldType, ITableData, ITableHeader } from '@/utils/table-data'
import SortIcon from '@/assets/icons/sort-row.svg'
import Chip from '@/components/common/Chip.vue'
import Typography from '@/components/common/Typography.vue'
import { ref } from 'vue'

interface IProps {
  headers: ITableHeader[]
  data: ITableData
}
interface IEmits {
  sort: [FieldType, boolean]
}

defineProps<IProps>()
const emit = defineEmits<IEmits>()

const dateSortToggle = ref(false)
</script>

<template>
  <div class="tableWrapper">
    <table class="table">
      <thead class="table__head">
        <tr>
          <th
            v-for="(item, idx) in headers" :key="idx" @click="() => {
              if (item.sortable) {
                emit('sort', item.name, dateSortToggle)
                dateSortToggle = !dateSortToggle
              }
            }"
          >
            <div class="table__headItem">
              <Typography type="span">
                {{ item.label }}
              </Typography>

              <SortIcon
                v-if="item.sortable" :class="{
                  table__dateSortAsc: dateSortToggle,
                }"
              />
            </div>
          </th>
        </tr>
      </thead>

      <tbody class="table__body">
        <tr
          v-for="(row, idx1) in data"
          :key="idx1" class="table__bodyRow" :class="{
            table__row_odd: idx1 % 2 !== 0,
          }"
        >
          <td
            v-for="(rowItem, idx2) in row" :key="idx2"
            :class="{
              table__bodyDateField: idx2 === 0,
            }"
          >
            <Typography v-if="rowItem.variant?.type !== 'chip'" type="span" :weight="500">
              {{ rowItem.label }}
            </Typography>

            <Chip v-else :label="rowItem.label" :type="rowItem.variant.state" />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="table__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style>
.table {
  --table-padding: 10px 16px;
}

tbody {
  td {
    height: 68px;
  }
}
</style>

<style lang="scss" scoped>
@use '@/assets/styles/colors';

.tableWrapper {
  border: 1px solid #E8EAEC;
  border-radius: 12px 12px;
  margin-bottom: 30px;
  max-height: 100%;
  overflow: auto;

  table tr th:nth-of-type(1), table tr td:nth-of-type(1) {
    width: 12%;
  }

  table tr th:nth-of-type(2), table tr td:nth-of-type(2) {
    width: 10%;
  }

  table tr th:nth-of-type(3), table tr td:nth-of-type(3) {
    width: 32%;
  }

  table tr th:nth-of-type(4), table tr td:nth-of-type(4) {
    width: 9%;
  }

  table tr th:nth-of-type(5), table tr td:nth-of-type(5) {
    width: 20%;
  }

  table tr th:nth-of-type(5), table tr td:nth-of-type(5) {
    width: 17%;
  }
}

.table {
  border-collapse: collapse;
  font-weight: inherit;
  width: 100%;
  text-align: left;

  &__row_odd {
    background-color: colors.$sc_base-12;
  }

  th {
    padding: var(--table-padding);
  }
  td {
    padding: 10px 16px;
  }
  &__bodyRow {
    border-top: 1px solid #E8EAEC;
    border-bottom: 1px solid #E8EAEC;
  }

  &__headItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    gap: 18px;
  }

  &__head {
    background: #F5F7F9;
    position: sticky;
    top: 0;
  }

  &__footer {
    background: #F5F7F9;
    padding: 11px 16px;
    position: sticky;
    bottom: 0;
  }

  &__dateSortAsc {
    transform: rotate(180deg);
  }

  svg {
    transition: transform .3s ease;
  }

  &__bodyDateField {
    text-wrap: nowrap;
  }

}
</style>
