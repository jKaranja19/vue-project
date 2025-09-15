<!-- This displays the blogs on the desktop view blurring out the rest of the content -->
<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <h2>{{ blog.title }}</h2>
      <h4><em>{{ blog.content }}</em></h4>
      <p>{{ blog.paragraph }}</p>
      <p><strong>{{ blog.author }}</strong></p>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  blog: Object
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  width: 80%;
  text-align: left;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
</style>
