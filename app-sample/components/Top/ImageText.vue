<template>
  <v-container>
  <v-row no-gutters>
    <v-col
      v-for="card in cards"
      :key="card.title"
      :cols="card.flex" >
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

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'A', text: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
        { title: 'B', text: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
        { title: 'C', text: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
      ],
    }),
  }
</script>
