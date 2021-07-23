<template>
  <div>
　<button @click="decrement">-</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from '@nuxtjs/composition-api'
import { CounterStore } from '~/composition/useCounter'
import { CounterKey } from '~/composition/keyCounter'

export default defineComponent({
  setup() {
    const { decrement } =inject(CounterKey) as CounterStore
    
    return {
      decrement
    }
  }
})
</script>
