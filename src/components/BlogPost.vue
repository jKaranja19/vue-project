<script setup>
// this should be the child component
// it receives the properties from the parent and displays a single blog and the parent displays all the posts.
// it's a reusable view on other parts
const props = defineProps({
  title: String,
  content: String,
  paragraph: String,
  author: String,
  index: Number,
})
const emit = defineEmits(['readBlog'])
</script>

<template>
  <div class="blog-card" @click="emit('readBlog', index)">
    <h2>{{ title }}</h2>
    <h4><em>{{ content }}</em></h4>
    <p>{{ paragraph.slice(0, 100) }}...</p>
    <p><strong>{{ author }}</strong></p>
    <button class="read-btn">Read Blog</button>
  </div>
</template>

<style scoped>
.blog-card {
  background: #f9f9f9;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
}
.blog-card:hover {
  transform: translateY(-5px);
}
.read-btn {
  margin-top: 10px;
  padding: 6px 12px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
