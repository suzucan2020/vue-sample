<template>
  <div>
    <h1>ToDoリスト</h1>
    <br />
    <input type="radio" id="all" name="type" value="すべて" v-model="radio" />
    <label for="all">すべて</label>
    <input type="radio" id="work" name="type" value="作業中" v-model="radio" />
    <label for="work">作業中</label>
    <input type="radio" id="complete" name="type" value="完了" v-model="radio" />
    <label for="complete">完了</label>
    <br />

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
    <br />
    <h2>新規タスクの追加</h2>
    <input type="text" v-model="task" />
    <button @click="addTask()">追加</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

type Tasks = {
  name: string;
  status: boolean;
};

export default defineComponent({
  setup() {
    // state
    const task = ref<string>('');
    const status = ref<boolean>(true); // true->作業中, false->完了
    const tasks = ref<Tasks[]>([]);
    const radio = ref<string>('すべて');

    // methods
    const addTask = (): void => {
      tasks.value.push({
        name: task.value,
        status: status.value,
      });
      task.value = '';
    };

    const deleteTask = (id: number): void => {
      tasks.value.splice(id, 1);
    };

    const updateTask = (id: number): void => {
      tasks.value[id].status = !tasks.value[id].status;
    };

    return {
      // state
      task,
      status,
      tasks,
      radio,
      // methods
      addTask,
      deleteTask,
      updateTask,
    };
  },
});
</script>

<style></style>
