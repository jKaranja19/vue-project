<script setup>
import { computed, reactive, ref } from 'vue'

// const counter = reactive({ count: 0 })
// const message = ref('Hello World!')

// const tileColour = ref('titlecolor')
// const count = ref(0)
// function increment() {
//   // update component state
//   count.value++
// }
// //the toggle feature for the button, mwehehe
// const awesome = ref(true)
// function toggle(){

// }
//calling the list view with mutating methods, first give them unique ids
let id=0
const newTodo = ref('')
const todos = ref([
  {id: id++, text: 'Learn Html', done:true},
  {id: id++, text:'Learn Javascript'},
  {id: id++, text:'Learn Vue'}
])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}

const hideCompleted = ref(false)
const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})
</script>

<template>

  <!-- <button @click="awesome = !awesome">Toggle</button>
  <h1 v-if="awesome" >Vue is awesome!</h1>
  <h1 v-else>Oh brother🥴</h1> -->

  <!-- <h2 :class="tileColour"> I am a certain color</h2> -->
  <!-- button  -->
  <!-- <button @click="increment">
    On click count is {{ count }} -->
  <!-- </button> -->
  <!-- input section is here -->
   <!-- <input v-model="text">
   <p>{{ text }}</p> -->

   <form @submit.prevent="addTodo">
    <!-- <input type="checkbox" v-model="todo.done"> -->
    <input v-model="newTodo" required placeholder="new todo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<style>
.titlecolor{
  color: red;
  font-weight: 10;
}
.done {
  text-decoration: line-through;
}
</style>