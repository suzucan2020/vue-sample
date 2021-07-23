<template>
  <SampleProvide>
    <SampleMergeComponent />
  </SampleProvide>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import SampleProvide from '~/components/SampleProviderComponent.vue'
import SampleMergeComponent from '~/components/SampleMergeComponent.vue'

export default defineComponent({
  components: {
    SampleProvide,
    SampleMergeComponent
  }
})
</script>
