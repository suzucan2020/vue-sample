<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
        </tr>
      </thead>
      <tbody v-for="(task, index) in tasks" :key="index">
        <tr v-if="radio === 'すべて'">
          <td>{{ index }}</td>
          <td>{{ task.name }}</td>
          <td v-if="task.status"><button @click="updateTask(index)">作業中</button></td>
          <td v-else><button @click="updateTask(index)">完了</button></td>
          <td><button @click="deleteTask(index)">削除</button></td>
        </tr>

        <tr v-else-if="radio === '作業中' && task.status === true">
          <td>{{ index }}</td>
          <td>{{ task.name }}</td>
          <td v-if="task.status"><button @click="updateTask(index)">作業中</button></td>
          <td v-else><button @click="updateTask(index)">完了</button></td>
          <td><button @click="deleteTask(index)">削除</button></td>
        </tr>

        <tr v-else-if="radio === '完了' && task.status === false">
          <td>{{ index }}</td>
          <td>{{ task.name }}</td>
          <td v-if="task.status"><button @click="updateTask(index)">作業中</button></td>
          <td v-else><button @click="updateTask(index)">完了</button></td>
          <td><button @click="deleteTask(index)">削除</button></td>
        </tr>
      </tbody>
    </table>
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
    const { task, status, tasks, radio, deleteTask, updateTask } = inject(
      taskLogicKey
    ) as taskLogicStore;

    return {
      // state
      task,
      status,
      tasks,
      radio,
      // methods
      deleteTask,
      updateTask,
    };
  },
});
</script>

<style></style>
