import { reactive, toRefs } from '@nuxtjs/composition-api'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

// 各型は参考まで
type Options = {
  headers: {
    'X-transaction-ID'?: string
    'x-api-key'?: string
    Authorization: string
    'Content-Type'?: string
  }
}
type Params = {
  [key: string]: any
}
type baseState = {
  response: {}
  otherError: Error | null
  isLoading: boolean
}

export const useAxios = (
  $axios: NuxtAxiosInstance,
  url: string,
  params?: Params,
  options?: Options
) => {
  const state = reactive<baseState>({
    response: {},
    otherError: null,
    isLoading: false
  })
  // GET
  const getData = async () => {
    state.isLoading = true
    try {
      const res = await $axios.$get(url, options)
      state.response = res
    } catch (error) {
      state.otherError = error
    } finally {
      state.isLoading = false
    }
  }
  // POST
  const postData = async () => {
    state.isLoading = true
    try {
      const res = await $axios.$post(url, params, options)
      state.response = res
    } catch (error) {
      state.otherError = error
    } finally {
      state.isLoading = false
    }
  }
  // PUT
  const putData = async () => {
    state.isLoading = true
    try {
      const res = await $axios.$put(url, params, options)
      state.response = res
    } catch (error) {
      state.otherError = error
    } finally {
      state.isLoading = false
    }
  }
  // DELETE
  const deleteData = async () => {
    state.isLoading = true
    try {
      const res = await $axios.$delete(url, params)
      state.response = res
    } catch (error) {
      state.otherError = error
    } finally {
      state.isLoading = false
    }
  }
  return { ...toRefs(state), getData, postData, putData, deleteData }
}
