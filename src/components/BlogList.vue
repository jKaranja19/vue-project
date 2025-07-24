<script setup>
import BlogPost from './BlogPost.vue'
import BlogModal from './BlogModal.vue'
import BlogForm from './BlogForm.vue'
import { ref } from 'vue'
// the array of details we want to see on the child component.
// it dynamically feeds the data to child view
const blogPosts= ref ([
    {
        title:'Tangled',
        content:'Animation on hair',
        paragraph:'Drop from the sun, magic flower comes from drop, old woman steals it, royalty needs it, feeds queen, queen gives birth, child magic hair, stoln, thief stumbles where child is, saved, family reunion!',
        author:'Joyline',
    },
    {
        title:'Superman',
        content:'A Movie',
        paragraph:'Man of steel, saves people, considered a god, just a human, has dog, dog bites and fights back, reuinion!',
        author:'Wangui',
    },
    {
        title:'Fantastic Four',
        content:'Another Movie',
        paragraph:'One guy stretches, the thing, two ladies, saving people, wierd powers and stuff, reuniooon!',
        author:'Karanja',
    },
    {
        title:'Elio',
        content:'Another Animation',
        paragraph:'Kid wants attention from parent, parent does not give, sad, waits fow alien to abduct, gets abducted, cool cool alien stuff, reuniiiiooonnnn',
        author:'Me, Joyline',
    },
    {
        title:'Lilo and Stitch',
        content:'Alien and child bcome friends',
        paragraph:'Literally on the aspect of child being friends with wierd alien, and more aliens are still around and they help ythem find their purpose...',
        author:'Again, Wangui',
    }
])

const showModal = ref(false)
const selectedBlog = ref(null)

function openBlog(index) {
  selectedBlog.value = blogPosts.value[index]
  showModal.value = true
}

function closeModal() {
  showModal.value = false
  selectedBlog.value = null
}

function addBlog(blog) {
  blogPosts.value.push(blog)
}
</script>
<template>
  <div class="grid-container">
    <BlogPost
      v-for="(post, index) in blogPosts"
      :key="index"
      :index="index"
      v-bind="post"
      @readBlog="openBlog"
    />
  </div>

  <button class="add-btn" @click="formOpen = !formOpen">Add Your Own Blog</button>
  <BlogForm v-if="formOpen" @submitBlog="addBlog" />

  <BlogModal v-if="showModal" :blog="selectedBlog" @close="closeModal" />
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.add-btn {
  background-color: #0055aa;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 1rem;
}
</style>
