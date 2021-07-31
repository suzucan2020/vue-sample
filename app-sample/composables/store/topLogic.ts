import { reactive } from '@nuxtjs/composition-api'

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
