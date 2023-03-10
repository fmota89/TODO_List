import { defineStore } from 'pinia'

export const useTaskStore = defineStore({
  id: 'task',
  state: () => ({
    tasks: [],
  }),
  getters: {
    getTaskById: (state) => (id) => {
      return state.tasks.find((task) => task.id === id)
    },
  },

  actions: {
    addTask(task) {
      this.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },

    removeTask(task) {
      if (window.confirm("Are you sure you want to delete this task?")) {
        const index = this.tasks.indexOf(task)
        this.tasks.splice(index, 1)
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    },

    editTask(task) {

    },

    loadTasks() {
      const tasks = JSON.parse(localStorage.getItem('tasks'))
      if (tasks) {
        this.tasks = tasks
      }
    },

  },

  persist: true,
}) 