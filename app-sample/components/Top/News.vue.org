<template>
  <v-container>
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
