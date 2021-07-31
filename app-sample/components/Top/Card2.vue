<template>
  <v-container fluid>
  <div v-for
    v-for="card in data.cards"
    :key="card.title"
  >
     <v-card
        class="mx-auto"
        max-width="1200"
      >
  <h3> {{ card.title }} </h3>
  <v-row dense>
        <v-col cols="6">
        <v-img 
          class="white--text align-end"
          height="400px"
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
import { defineComponent } from '@nuxtjs/composition-api'
import { topLogicCard2 } from '~/composables/store/topLogic'

export default defineComponent({
  setup(){
    const { data } = topLogicCard2()
    return {
      data,
    }
  }
})
</script>
