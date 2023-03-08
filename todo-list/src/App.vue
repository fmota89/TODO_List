<template>
  <main>
    <!-- Heading -->
    <header>
      <!-- User Photo -->
      <div class="user-photo">
      </div>
      
      <h1>To Do List</h1>

      <h1>{{ todoStore.name }}</h1>
    </header>

    <!-- filter tasks -->
    <nav class="filter">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'completed'">Completed Tasks</button>
      <button @click="filter = 'incomplete'">Incomplete Tasks</button>
    </nav>

    <!-- to do list -->
    <div class="todo-list" v-if="filter === 'all'">
      <p>All tasks</p>
      <div v-for="todo in todoStore.todos">
        <TodoDetails :todo="todo" />
      </div>
    </div>

    <!-- to do completed -->
    <div class="todo-list" v-if="filter === 'completed'">
      <p>Completed Tasks</p>
      <div v-for="todo in todoStore.completed">
        <TodoDetails :todo="todo" />
      </div>
    </div>

    <!-- to do incomplete -->
    <div class="todo-list" v-if="filter === 'incomplete'">
      <p>Uncompleted Tasks</p>
      <div v-for="todo in todoStore.incomplete">
        <TodoDetails :todo="todo" />
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import { useTodoStore } from './stores/TodoStore'
import TodoDetails from './components/TodoDetails.vue'

export default {
  components: {
    TodoDetails,
  },
  setup () {
    const todoStore = useTodoStore();

    const filter = ref('all');
    // toggle between all and completed
  
    return { todoStore, filter };

  }
}
</script>

<style>
.user-photo {
  border: 1px solid black;
  height: 100px;
  width: 100px;
  border-radius: 50px;
}
</style>