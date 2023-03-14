import { defineStore } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

export const useTaskStore = defineStore({
  id: 'task',
  state: () => ({
    tasks: [],
    archive_tasks: []
  }),
  getters: {
    getTaskById: (state) => (id) => {
      return state.tasks.find((task) => task.id === id)
    },
  },

  actions: {
    addTask(task) {
      this.tasks.push(task)
    },

    removeTask(task) {
      if (window.confirm("Are you sure you want to delete this task?")) {
        const index = this.tasks.indexOf(task)
        this.tasks.splice(index, 1)
      }
    },

    editTask(task) {
      
    },

    loadTasks() {
    
    },
  },

  plugins: [createPersistedState()],
})