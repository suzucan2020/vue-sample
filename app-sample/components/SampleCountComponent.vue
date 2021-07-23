<template>
  <div>
    <div>{{ count }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from '@nuxtjs/composition-api'
import { CounterStore } from '~/composition/useCounter'
import { CounterKey } from '~/composition/keyCounter'

export default defineComponent({
  setup() {
    const { count } =inject(CounterKey) as CounterStore
    
    return {
      count
    }
  }
})
</script>
