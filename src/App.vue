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

</script>

<template>
  <!-- <h1>{{ message }}</h1>
  <p>Count is: {{ counter.count }}</p> -->

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