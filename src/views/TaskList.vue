<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Milestone</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.title }}</td>
          <td>{{ task.description }}</td>
          <td>{{ task.priority }}</td>
          <td>{{ task.milestone }}</td>
          <td>{{ task.status }}</td>
          <td>{{ task.date }}</td>
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

    editTask(taskId) {
      const taskStore = useTaskStore();

      const task = taskStore.getTask(taskId);
      const newTitle = prompt("Enter a new title", task.title);
      const newDescription = prompt("Enter a new description", task.description);
      const newPriority = prompt("Enter a new priority", task.priority);
      taskStore.updateTask(taskId, {
        title: newTitle,
        description: newDescription,
        priority: newPriority,
      });
    },
  },
};
</script>
