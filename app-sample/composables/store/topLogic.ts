import { toRefs, reactive } from '@nuxtjs/composition-api'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { useAxios } from '~/composables/axios/useAxios'


export const topLogicImageText = () => {

  const data = reactive({
    cards: [
      { title: 'A', text: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
      { title: 'B', text: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
      { title: 'C', text: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
    ],
  })

  return {
    data,
  }

}

export const topLogicCard2 = () => {

  const data = reactive({
    cards: [
      { title: 'A', text: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
      { title: 'B', text: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
    ],
  })

  return {
    data,
  }

}

export const useWpRestApi = (axios: NuxtAxiosInstance) => {
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
      `http://13.231.178.0/wp-json/wp/v2/posts`
    )
    sampleState.isLoading = isLoading as any
    await getData()
    sampleState.response = response as any
    sampleState.error = otherError as any
  }
  return { ...toRefs(sampleState), apiGetTrigger }
}
