<script setup>
import { watch, onMounted, computed, reactive, ref } from 'vue'
import ChildComp from './ChildComponent.vue'

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
// let id=0
// const newTodo = ref('')
// const todos = ref([
//   {id: id++, text: 'Learn Html', done:true},
//   {id: id++, text:'Learn Javascript'},
//   {id: id++, text:'Learn Vue'}
// ])

// function addTodo() {
//   todos.value.push({ id: id++, text: newTodo.value })
//   newTodo.value = ''
// }

// function removeTodo(todo) {
//   todos.value = todos.value.filter((t) => t !== todo)
// }

// const hideCompleted = ref(false)
// const filteredTodos = computed(() => {
//   return hideCompleted.value
//     ? todos.value.filter((t) => !t.done)
//     : todos.value
// })
// working with the mounted elemt, only when it is defined we can see the word defined in it.
// const pElement = ref(null)
// onMounted(()=>{
//   pElement.value.textContent = 'mounted!'
// })

//working with watch
// const todoId = ref(1)
// const todoData = ref(null)
// async function fetchData() {
//   todoData.value = null
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
//   )
//   todoData.value = await res.json()
// }

// fetchData()

// watch(todoId, fetchData)

//sedning data to the child component:
const greeting = ref('Hello from parent')
const childMsg = ref('No child msg yet')
const msg = ref('from parent')
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

   <!-- <form @submit.prevent="addTodo"> -->
    <!-- <input type="checkbox" v-model="todo.done"> -->
    <!-- <input v-model="newTodo" required placeholder="new todo"> -->
    <!-- <button>Add Todo</button> -->
  <!-- </form> -->
  <!-- <ul> -->
    <!-- <li v-for="todo in filteredTodos" :key="todo.id"> -->
      <!-- <input type="checkbox" v-model="todo.done"> -->
      <!-- <span :class="{ done: todo.done }">{{ todo.text }}</span> -->
      <!-- <button @click="removeTodo(todo)">X</button> -->
    <!-- </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button> -->

  <!-- working with the mounted function -->
   <!-- <p ref="pElement">Hey there</p> -->

   <!-- here we are looking at how watch can check the data -->
  <!-- <p>Todo id: {{ todoId }}</p>
  <button @click="todoId++" :disabled="!todoData">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre> -->
  <!-- <ChildComp></ChildComp> -->
   <!-- passing message from the parent -->
    <ChildComp :msg="greeting"/>
    <ChildComp @response="(msg) => childMsg = msg" />
    <p>{{ childMsg }}</p>
    <ChildComp>This is a slot section</ChildComp>
    <ChildComp>Message: {{ msg }}</ChildComp>
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