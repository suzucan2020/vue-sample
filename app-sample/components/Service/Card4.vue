<template>
  <v-container fluid>
  <v-row dense>
    <v-col
      v-for="card in cards"
      :key="card.title"
      :cols="card.flex"
    >
      <v-card
        class="mx-auto"
        max-width="400"
      >
        <h3> {{ card.title }} </h3>
        <v-img 
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>

        <v-card-text class="text--primary">
          <div> {{ card.text }} </div>
        </v-card-text>

      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'A', text: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
        { title: 'B', text: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'C', text: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
        { title: 'D', text: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      ],
    }),
  }
</script>
