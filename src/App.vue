<template>
  <main>
    <h1>📝 Blog Viewer</h1>
    <BlogList />
  </main>
</template>

<script setup>
import BlogList from './components/BlogList.vue'
</script>

<style>
main {
  padding: 2rem;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  text-align: center;
}
</style>
