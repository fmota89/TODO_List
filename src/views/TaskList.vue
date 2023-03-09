<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Completed</th>
          <th>Priority</th>
          <th>Date</th>
          <th>Milestone</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.id }}</td>
          <td>{{ task.title }}</td>
          <td>{{ task.completed }}</td>
          <td>{{ task.priority }}</td>
          <td>{{ task.date }}</td>
          <td>{{ task.milestone }}</td>
          <td>{{ task.status }}</td>
          <td>
            <button @click="removeTask(task.id)">Delete</button>
          </td>
          <td>
            <button @click="editTask(task.id)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useTaskStore } from "../stores/TaskStore";

export default {
  name: "TaskList",
  computed: {
    tasks() {
      return useTaskStore().tasks;
    },
  },

  methods: {
    removeTask(taskId) {
      useTaskStore().removeTask(taskId);
    },

    editTask(task) {
      useTaskStore().editTask(task);
    },

  },
};
</script>
