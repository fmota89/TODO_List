<template>
  <v-card class="task" outlined>
    <v-row class="d-flex align-center">
      <v-col cols="auto" class="flex-grow-1">{{ task.title }}</v-col>
      <v-col cols="auto">
        <v-icon 
          class="mx-2 icon"
          :class="{active: task.completed}"
          @click="taskStore.toggleCompleted(task.id)"
        >mdi-check</v-icon>
        <!---->
        <v-icon
          class="mx-2 icon"
        >mdi-pencil</v-icon>
        <v-icon
          class="mx-2 icon"
        >mdi-tag</v-icon>
        <v-icon 
          class="mx-2 icon"
          @click="taskStore.deleteTask(task.id)"
        >mdi-delete</v-icon>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useTaskStore } from '../stores/TaskStore'
export default {
  props: ['task'],
  setup() {
    const taskStore = useTaskStore();

    const { tasks, loading, completed, totalCount, completedCount } = storeToRefs(taskStore);

    //fetch tasks
    taskStore.getTasks();

    return { taskStore, tasks, loading, completed, totalCount, completedCount }
  }
}
</script>

<style scoped>
.task {
  padding: 12px 40px;
  max-width: 400px;
  margin: 0 auto;
}

.icon {
  cursor: pointer;
  color: #bbb;
}

.icon.active {
  color: green;
}
</style>
