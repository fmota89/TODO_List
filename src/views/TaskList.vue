<template>
  <div class="task-header">
    <h1>Tasks List</h1>
  </div>

  <!-- filter -->
  <nav class="filter">
    <v-btn text color="primary" :class="{ active: filter === 'all' }" @click="filter = 'all'">All tasks</v-btn>
    <v-btn text color="primary" :class="{ active: filter === 'completed' }" @click="filter = 'completed'">Completed</v-btn>
    <v-btn text color="primary" :class="{ active: filter === 'incomplete' }" @click="filter = 'incomplete'">To do</v-btn>
  </nav>

  <!-- task list -->
  <div class="task-list" v-if="filter === 'all'">
    <p>All Task</p>
    <p>You have: {{ taskStore.totalCount }} tasks in your list.</p>
    <div v-for="task in taskStore.tasks">
      <TaskDetails :task="task"/>
    </div>
  </div>

  <!-- task completed -->
  <div class="task-list" v-if="filter === 'completed'">
    <p>Completed Tasks</p>
    <p>You have: {{ taskStore.completedCount }} completed. Kudus!!!</p>
    <div v-for="task in taskStore.completed">
      <TaskDetails :task="task"/>
    </div>
  </div>

  <!-- task incomplete -->
  <div class="task-list" v-if="filter === 'incomplete'">
    <p>Incomplete Tasks</p>
    <p>You have: {{ taskStore.completedCount }} completed. Get to work!!</p>
    <div v-for="task in taskStore.incomplete">
      <TaskDetails :task="task"/>
    </div>
  </div>

  <h1></h1>

</template>

<script>
import { ref } from 'vue';
import TaskDetails from '../components/TaskDetails.vue'
import { useTaskStore } from '../stores/TaskStore';

export default {
  components: {
    TaskDetails
  },

  setup () {
    const taskStore = useTaskStore();

    //fetch tasks
    taskStore.getTasks();

    const filter = ref('all')

    return { taskStore, filter }
  }
};
</script>


<style scoped>
.filter {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

.active {
  background-color: #c5cae9;
  color: white;
}
</style>