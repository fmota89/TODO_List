<template>
  <div class="todo">
    <h3>{{ todo.title }}</h3>
    <div class="icons">
      <!-- Icons -->
      <i class="material-icons">delete</i>
      <i class="material-icons">done</i>
      <i class="material-icons">favorite</i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todo']
}
</script>