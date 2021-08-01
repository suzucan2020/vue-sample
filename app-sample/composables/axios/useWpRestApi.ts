import { toRefs, reactive } from '@nuxtjs/composition-api'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import useAxios from '~/composables/axios/useAxios'

const useSampleApi = (axios: NuxtAxiosInstance) => {
  const sampleState = reactive<{
    response: any
    error: Error | null
    isLoading: boolean
  }>({
    response: [],
    error: null,
    isLoading: false
  })
  const apiGetTrigger = async () => {
    const { response, otherError, isLoading, getData } = useAxios(
      axios,
      `https://hogehogehoge.com`
    )
    sampleState.isLoading = isLoading as any
    await getData()
    sampleState.response = response as any
    sampleState.error = otherError as any
  }
  return { ...toRefs(sampleState), apiGetTrigger }
}
