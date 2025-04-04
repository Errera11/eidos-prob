import { getDate } from '@/utils/getDate'
import { TableData } from '@/utils/table-data'

interface IProps {
  curPage: number
  query: string
  perPage: number
  // null - default order, true - asc, false - desc
  dateSort: null | boolean
}

export function fetchData({ curPage, query, perPage, dateSort }: IProps) {
  // check if sorting is applied
  const sortedRows = typeof dateSort === 'boolean'
    ? TableData.sort((a, b) => {
        const aField = a.find(f => f.name === 'date')
        const bField = b.find(f => f.name === 'date')
        const aDate = getDate(aField.label)
        const bDate = getDate(bField.label)

        if (dateSort) {
          return bDate.getTime() - aDate.getTime()
        }
        else {
          return aDate.getTime() - bDate.getTime()
        }
      })
    : TableData
    // filtering by query
  const totalRows = sortedRows.filter((row) => {
    return row.some(i => i.label.toLowerCase().includes(query))
  })

  // apply pagination
  const paginatedRows = totalRows.slice((curPage - 1) * perPage, curPage * perPage)

  const totalPages = Math.floor(totalRows.length / perPage) || 1
  const data = paginatedRows

  return {
    totalPages,
    data,
  }
}
