<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  blog: Object
})
const emit = defineEmits(['submitBlog'])

const title = ref('')
const content = ref('')
const paragraph = ref('')
const author = ref('')
const index = ref(undefined)

// Understand 
watch(() => props.blog, (newBlog) => {
  if (newBlog) {
    title.value = newBlog.title
    content.value = newBlog.content
    paragraph.value = newBlog.paragraph
    author.value = newBlog.author
    index.value = newBlog.index // updating
  }
}, { immediate: true })

function handleSubmit() {
  if (!title.value || !paragraph.value) {
    alert('Please fill out the blog')
    return
  }
  emit('submitBlog', {
    title: title.value,
    content: content.value,
    paragraph: paragraph.value,
    author: author.value || 'Anonymous',
    index: index.value
  })
  // Clear form after submission
  title.value = ''
  content.value = ''
  paragraph.value = ''
  author.value = ''
  index.value = undefined
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="blog-form">
    <h3>{{ index !== undefined ? 'Edit Blog' : 'Add Your Blog' }}</h3>
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
