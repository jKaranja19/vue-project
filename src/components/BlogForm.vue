<script setup>
import { ref } from 'vue'
const emit = defineEmits(['submitBlog'])

const title = ref('')
const content = ref('')
const paragraph = ref('')
const author = ref('')

function handleSubmit() {
  if (!title.value || !paragraph.value) {
    alert('Please fill out the blog')
    return
  }
  emit('submitBlog', {
    title: title.value,
    content: content.value,
    paragraph: paragraph.value,
    author: author.value || 'Anonymous'
  })
  title.value = ''
  content.value = ''
  paragraph.value = ''
  author.value = ''
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="blog-form">
    <h3>Add Your Blog</h3>
    <input v-model="title" placeholder="Title" required />
    <input v-model="content" placeholder="Which context is it?" />
    <textarea v-model="paragraph" placeholder="Add your text right here..." required />
    <input v-model="author" placeholder="Author" />
    <button type="submit">Post Blog</button>
  </form>
</template>

<style scoped>
.blog-form {
  background: #eef;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 2rem;
}
input, textarea {
  padding: 8px;
  border: 1px solid #aaa;
  border-radius: 4px;
}
button {
  align-self: flex-start;
  padding: 8px 16px;
  background: #b860b8;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
