<script setup>
import { reactive, ref } from 'vue'

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
const todos = ref()[
  {id: id++, text: 'Learn Html'},
  {id: id++, text:'Learn Javascript'},
  {id: id++, text:'Learn Vue'}
]

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
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
    <input v-model="newTodo" required placeholder="new todo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>

<style>
.titlecolor{
  color: red;
  font-weight: 10;
}
</style>