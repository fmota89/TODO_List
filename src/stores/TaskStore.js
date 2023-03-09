import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    loading: false,
  }),

  getters: {
    completed() {
      return this.tasks.filter(t => t.completed)
      // returns true if he finds true
      // returns false if we want to filer it out
    },

    incomplete() {
      return this.tasks.filter(t => !t.completed)
      // do the opposite thing
    },

    completedCount() {
      return this.tasks.reduce((p, c) => {
        return c.completed ? p + 1 : p;
      }, 0)
    },

    uncompletedCount() {
      return this.tasks.reduce((p, c) => {
        return !c.completed ? p + 1 : p;
      }, 0)
    },

    totalCount: (state) => {
      return state.tasks.length;
    }
  },

  actions: {
    async getTasks() {
      this.loading = true;
    
      // Retrieve the tasks from local storage
      const tasks = localStorage.getItem('tasks');
    
      if (tasks) {
        // If tasks are already in local storage, use them
        this.tasks = JSON.parse(tasks);
      } else {
        // If no tasks are in local storage, set the tasks to an empty array
        this.tasks = [];
      }
    
      this.loading = false;
    },

    async addTask(task) {
      this.tasks.push(task);
    
      // Add the new task to the tasks array in local storage
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    },

    async deleteTask(id) {
      this.tasks = this.tasks.filter(t => {
        return t.id !== id;
      });
    
      // Store the updated tasks in local storage
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },

    async toggleCompleted(id) {
      const task = this.tasks.find(t => t.id === id);
      task.completed = !task.completed;
    
      // Update the tasks array in local storage
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const index = tasks.findIndex(t => t.id === id);
      tasks[index].completed = task.completed;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  },
  
  persist: true,
})