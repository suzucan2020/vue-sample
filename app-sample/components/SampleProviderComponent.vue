<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, provide } from '@nuxtjs/composition-api'
import { CounterKey } from '~/composition/keyCounter'
import useCounter from '~/composition/useCounter'

export default defineComponent({
  setup() {
    provide(CounterKey, useCounter())
    return {}
  }
})
</script>
