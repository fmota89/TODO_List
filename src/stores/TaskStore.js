import { defineStore } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";

export const useTaskStore = defineStore({
  id: "task",
  state: () => ({
    tasks: [],
  }),
  getters: {
    getTaskById: (state) => (id) => {
      return state.tasks.find((task) => task.id === id);
    },
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },

    removeTask(task) {
      if (window.confirm("Are you sure you want to delete this task?")) {
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
      }
    },

    updateTask(taskId, updatedTaskFields) {
      const taskToUpdate = this.tasks.find((task) => task.id === taskId);

      if (taskToUpdate) {
        Object.assign(taskToUpdate, updatedTaskFields);
      }
    },
  },
  persist: true,

  plugins: [createPersistedState()],
});
