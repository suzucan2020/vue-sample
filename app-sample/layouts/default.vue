<template>
  <v-app id="inspire">

<template>
  <v-toolbar
    color="purple"
    dark
  >
    <v-toolbar-title>Title</v-toolbar-title>

    <v-divider
      class="mx-4"
      vertical
    ></v-divider>

    <span class="subheading">My Home</span>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text to="/" nuxt>
        TOP
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text to="/service" nuxt>
        SERVICE
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text>
        News
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text>
        Blog
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text>
        Music
      </v-btn>

      <v-divider vertical></v-divider>
    </v-toolbar-items>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </v-toolbar>
</template>


    <v-main>
      <!--  -->
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>
