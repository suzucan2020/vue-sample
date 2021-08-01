<template>
  <v-container>
 
    <h2>Axios Sample</h2>
    <section>
      <form @submit.prevent="apiGetTrigger">
        <button>GetPost</button>
      </form>
    </section>
    <div v-if="otherError">
      <h2>otherError !! {{ otherError }}</h2>
    </div>
    <div v-if="isLoading"><h2>Fetching Data</h2></div>

    <div v-for="post in response"
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

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useWpRestApi } from '~/composables/store/topLogic'
export default defineComponent({
  setup(_props, {root}) {
    const { $axios } = root
    const {
      response,
      error,
      isLoading,
      apiGetTrigger
    } = useWpRestApi($axios)

    apiGetTrigger() // こんな感じでsetup内で呼び出すとイベントではなくLifecycle内で呼ぶことも可能です。

    return {
      response,
      error,
      isLoading,
      apiGetTrigger
    }
  }
})  
</script>
