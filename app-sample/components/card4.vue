<template>
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
        <h2>Hello</h2>
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>

        <v-card-text class="text--primary">
          <div> {{ card.title }} </div>
        </v-card-text>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      ],
    }),
  }
</script>
