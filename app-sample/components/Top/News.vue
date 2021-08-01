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
          <span>{{ list.name }}</span>
          <span>{{ list.street }}</span>
          <span>{{ list.city }}</span>
          <span>{{ list.postal_code }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useSampleApi from '~/composable/axios/useWpRestApi'
export default defineComponent({
  setup(_props, {root}) {
    const { $axios } = root
    const {
      response
      isLoading,
      apiGetTrigger,
      otherError
    } = useWpRestApi($axios)

    apiGetTrigger() // こんな感じでsetup内で呼び出すとイベントではなくLifecycle内で呼ぶことも可能です。

    return {
      isLoading,
      response,
      apiGetTrigger,
      otherError
    }
  }
})  
