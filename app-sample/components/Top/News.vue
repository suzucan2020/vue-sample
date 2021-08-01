<template>
  <div>
    <h2>Sample</h2>
    <section>
      <form @submit.prevent="apiGetTrigger">
        <button>Getlist</button>
      </form>
    </section>
    <div v-if="otherError">
      <h2>otherError !! {{ otherError }}</h2>
    </div>
    <div v-if="isLoading"><h2>Fetching Data</h2></div>
    <div v-for="list in response" :key="list.id">
      <ul>
        <li>
          <p> {{ list.date }} </p>
          <p><a v-bind:href="list.link">{{ list.title.rendered }}</a></p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useWpRestApi } from '~/composables/axios/useWpRestApi'
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
