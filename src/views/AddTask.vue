<template>
  <h1>Add new Task</h1>
  <form @submit.prevent="addTask">
    <div>
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="title" required />
    </div>
    <div>
      <label for="completed">Completed:</label>
      <input type="checkbox" id="completed" v-model="completed" />
    </div>
    <div>
      <label for="priority">Priority:</label>
      <select id="priority" v-model="priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
    <div>
      <label for="date">Date:</label>
      <input type="date" id="date" v-model="date" />
    </div>
    <div>
      <label for="milestone">Milestone:</label>
      <input type="date" id="milestone" v-model="milestone" />
    </div>
    <div>
      <label for="status">Status:</label>
      <select id="status" v-model="status">
        <option value="active">Active</option>
        <option value="pending">Pending</option>
        <option value="done">Done</option>
      </select>
    </div>
    <button type="submit">Add Task</button>
  </form>
</template>

<script>
import { useTaskStore } from "../stores/TaskStore";

export default {
  name: "TaskForm",
  data() {
    return {
      title: "",
      completed: false,
      priority: "",
      date: "",
      milestone: "",
      status: "",
    };
  },
  methods: {
    addTask() {
      const task = {
        id: Date.now(),
        title: this.title,
        completed: this.completed,
        priority: this.priority,
        date: this.date,
        milestone: this.milestone,
        status: this.status,
      };
      useTaskStore().addTask(task);
      this.resetForm();
    },
    resetForm() {
      this.title = "";
      this.completed = false;
      this.priority = "";
      this.date = "";
      this.milestone = "";
      this.status = "";
    },
  },
};
</script>