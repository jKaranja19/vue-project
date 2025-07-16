<script setup>
import { reactive, ref } from 'vue'

// const counter = reactive({ count: 0 })
// const message = ref('Hello World!')

const tileColour = ref('titlecolor')
const count = ref(0)
function increment() {
  // update component state
  count.value++
}
//the toggle feature for the button, mwehehe
const awesome = ref(true)
// function toggle(){

// }

</script>

<template>

  <button @click="awesome = !awesome">Toggle</button>
  <h1 v-if="awesome" >Vue is awesome!</h1>
  <h1 v-else>Oh brother🥴</h1>

  <h2 :class="tileColour"> I am a certain color</h2>
  <!-- button  -->
  <button @click="increment">
    On click count is {{ count }}
  </button>
  <!-- input section is here -->
   <input v-model="text">
   <p>{{ text }}</p>
</template>

<style>
.titlecolor{
  color: red;
  font-weight: 10;
}
</style>