import { reactive, computed } from '@nuxtjs/composition-api'

const useCounter = () => {

  const state = reactive({
    count: 0
  })

  const count = computed(() => state.count)

  const increment = () => state.count++
  const decrement = () => state.count--

  return {
    count,
    increment,
    decrement,
  }
}
export type CounterStore = ReturnType<typeof useCounter>
export default useCounter
