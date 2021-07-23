<template>
  <div>
    <input type="radio" id="all" name="type" value="すべて" v-model="radio" />
    <label for="all">すべて</label>
    <input type="radio" id="work" name="type" value="作業中" v-model="radio" />
    <label for="work">作業中</label>
    <input type="radio" id="complete" name="type" value="完了" v-model="radio" />
    <label for="complete">完了</label>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api';
// logic
import taskLogicStore from '@/composables/store/taskLogic';
// key
import taskLogicKey from '@/composables/key/taskLogicKey';

export default defineComponent({
  setup() {
    const { radio } = inject(taskLogicKey) as taskLogicStore;

    return {
      // state
      radio,
    };
  },
});
</script>

<style></style>
