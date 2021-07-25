<template>
<v-container fluid>

  <v-row>
    <v-col cols="12">
      <TopImage />
    </v-col>
  </v-row>

  <h2 class="text-center">NEWS</h2>
  <p class="text-center">news</p>

  <v-row>
    <v-col cols="12">
        <v-container fluid>
<div v-for
    v-for="post in posts"
    :key="post.id"
  >
  <v-row dense>
    <v-col cols="6">
    <p> {{ post.date }} </p>
    </v-col>

    <v-col cols="6">
    <p><a v-bind:href="post.link">{{ post.title.rendered }}</a></p>
    </v-col>
  </v-row>
  </div>
  </v-container>
    </v-col>
  </v-row> 

  <v-row>
    <v-col cols="12">
      <TopImageText />
    </v-col>
  </v-row>

</v-container>
</template>

<script>
export default {
  asyncData({ $axios }) {
    return $axios.get("http://13.231.178.0/wp-json/wp/v2/posts").then(res => {
      return {
        posts: res.data
      }
    })
  },
  data() {
    return {
      message: "hello nuxt ",
    }
  },
  methods: {
    resetUser: function () {
      this.posts = []
    },
    fetchUser: function () {
      this.$axios.get("http://13.231.178.0/wp-json/wp/v2/posts").then(res => {
        this.posts = res.data
      })
    },
  }
}
</script>
