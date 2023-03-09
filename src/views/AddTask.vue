<template>
  <div class="add-task">
    <h1>Add Task</h1>
  </div>

  <form @submit.prevent="handleSubmit">
    <input 
      type="text"
      placeholder="I need to..."
      v-model="newTask"
    >
    <!--
    <input 
      type="text"
      placeholder="Description."
      v-model="newDescription"
    >-->
    <button>Add Task</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useTaskStore } from '../stores/TaskStore';

export default {
  setup () {
    const taskStore = useTaskStore();

    //fetch tasks
    taskStore.getTasks();

    const newTask = ref('');

    const handleSubmit = () => {
      
      if (newTask.value.length > 0) {
        taskStore.addTask({
          title: newTask.value,
          completed: false,
          id: Math.floor(Math.random() * 10000),
          //description: this.description.push(newDescription)
        })
        newTask.value = '';
        //newDescription.value = '';
      }
    }

    return { handleSubmit, newTask }
  }
};
</script>