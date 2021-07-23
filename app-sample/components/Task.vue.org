<template>
  <div>
    <input type="text" v-model="task" />
    <button @click="addTask()">追加</button>
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
    const { task, addTask } = inject(taskLogicKey) as taskLogicStore;

    return {
      // state
      task,
      // methods
      addTask,
    };
  },
});
</script>

<style></style>
