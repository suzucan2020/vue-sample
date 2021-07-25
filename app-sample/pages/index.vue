<template>
<v-container fluid>

    <div>
      <Logo />
      <h1 class="title">
        nuxt-ssr-app
      </h1>
      <ul>
        <li v-for="user in users">
          {{ user.id }}
          {{ user.date }}
          {{ user.link }}
        </li>
      </ul>
      <button @click="resetUser()">reset</button>
      <button @click="fetchUser()">fetch user</button>
    </div>

</v-container>
</template>
<script>
export default {
  asyncData({ $axios }) {
    return $axios.get("http://13.231.178.0/wp-json/wp/v2/posts").then(res => {
      return {
        users: res.data
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
      this.users = []
    },
    fetchUser: function () {
      this.$axios.get("http://13.231.178.0/wp-json/wp/v2/posts").then(res => {
        this.users = res.data
      })
    },
  }
}
</script>
