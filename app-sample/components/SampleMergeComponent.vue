<template>
  <div>
    <SampleCount />
    <SampleAddButton />
    <SampleSubButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import SampleCount from '~/components/SampleCountComponent.vue'
import SampleAddButton from '~/components/SampleAddComponent.vue'
import SampleSubButton from '~/components/SampleSubComponent.vue'

export default defineComponent({
  components: {
    SampleCount,
    SampleAddButton,
    SampleSubButton
  }
})
</script>
