<script setup>
const props = defineProps({
  blog: Object
})
const emit = defineEmits(['close'])
</script>

<template>
  <div class="modal-backdrop" @click.self="emit('close')">
    <div class="modal-card">
      <h2>{{ blog.title }}</h2>
      <h4><em>{{ blog.content }}</em></h4>
      <p>{{ blog.paragraph }}</p>
      <p><strong>~ {{ blog.author }}</strong></p>
      <button @click="emit('close')">Close</button>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.4);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}
.modal-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
}
</style>
