import type { Ref } from 'vue'
import { ref } from 'vue'

interface IProps {
  totalPages: Ref<number>
  defaultPage: number
}

export function usePage({ totalPages, defaultPage }: IProps) {
  const curPage = ref(defaultPage)

  const setNextStep = () => {
    if (curPage.value + 1 <= totalPages.value)
      curPage.value += 1
  }
  const setPrevStep = () => {
    if (curPage.value - 1 > 0)
      curPage.value -= 1
  }
  const setPage = (page: number) => {
    if (page <= totalPages.value && page >= 1)
      curPage.value = page
  }

  return {
    setNextStep,
    setPrevStep,
    setPage,
    currentPage: curPage,
  }
}
