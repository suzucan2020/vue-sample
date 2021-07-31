<template>
  <v-container>
  <v-row no-gutters>
    <v-col
      v-for="card in data.cards"
      :key="card.title"
      :sm="card.flex" 
      cols="12"
      >
      <v-card
        class="mx-auto"
        max-width="400"
      >
        <v-img
          class="white--text align-center"
          height="300px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-row justify="center">
              <v-card-title>{{ card.title }}</v-card-title>
          </v-row>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { topLogicImageText } from '~/composables/store/topLogic'

export default defineComponent({
  setup(){
    const { data } = topLogicImageText()
    return {
      data,
    }
  }
})
</script>
