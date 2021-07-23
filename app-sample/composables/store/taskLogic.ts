import { ref } from '@vue/composition-api';

type Tasks = {
  name: string;
  status: boolean;
};

export default function taskLogic() {
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
}

// 型情報を追加する
export type taskLogicStore = ReturnType<typeof taskLogic>;
