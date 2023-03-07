import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [
      {
        id: 1,
        title: "Buy groceries",
        status: false,
        created_at: "2023-03-07T09:00:00Z",
        updated_at: "2023-03-07T09:00:00Z",
        priority: "High",
        isFav: true
      },
      {
        id: 2,
        title: "Pay bills",
        status: true,
        created_at: "2023-03-07T09:00:00Z",
        updated_at: "2023-03-07T09:00:00Z",
        priority: "Medium",
        isFav: false
      },
    ],
  }),
  
  getters: {
    completed() {
      return this.todos.filter(t => t.status)
      // returns true if he finds true
      // returns false if we want to filer it out
    },
    
    incomplete() {
      return this.todos.filter(t => !t.status)
      // do the opposite thing
    }
  }
})