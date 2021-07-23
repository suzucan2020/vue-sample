<template>
  <div>
    <div>{{ count }}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useCounter from '~/composition/useCounter'

export default defineComponent({
  setup() {
    const { count, increment, decrement } = useCounter()
    return {
      count,
      increment,
      decrement
    }
  }
})
</script>
