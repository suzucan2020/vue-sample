<template>
  <v-container fluid>
  <div v-for
    v-for="card in data.cards"
    :key="card.title"
  >
     <v-card
        class="mx-auto"
        max-width="800"
      >
  <h3> {{ card.title }} </h3>
  <v-row dense>
        <v-col cols="6">
        <v-img 
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>
        </v-col>
        <v-col cols="6">
          <p> {{ card.text }} </p>
        </v-col>
  </v-row>
  </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(){
    const data = reactive({
      cards: [
        { title: 'A', text: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
        { title: 'B', text: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'C', text: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
        { title: 'D', text: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      ],
    })

    return {
      data,
    }
  },
})
</script>
