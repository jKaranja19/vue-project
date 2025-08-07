<!-- The parent that holds all children components, but a child to the app.vue -->
<script setup>
import BlogPost from './BlogPost.vue'
import BlogModal from './BlogModal.vue'
import BlogForm from './BlogForm.vue'
import { ref } from 'vue'

const blogPosts = ref([
  {
    title: 'Tangled',
    content: 'Animation on hair',
    paragraph: 'Drop from the sun, magic flower comes from drop, old woman steals it, royalty needs it, feeds queen, queen gives birth, child magic hair, stoln, thief stumbles where child is, saved, family reunion!!',
    author: 'Joyline',
  },
  {
    title: 'Superman',
    content: 'A Movie',
    paragraph: 'Man of steel, saves people, considered a god, just a human, has dog, dog bites and fights back, bald man, HE IS BALD AND TORTURING PEOPLE WHO HAVE HAIR,gets beat up by dog, reuinion!!',
    author: 'Wangui',
  },
  {
    title: 'Fantastic Four',
    content: 'Another Movie',
    paragraph: 'One guy stretches, the thing, two ladies, saving people, wierd powers and stuff, fight bad guys, dan dannnn reuniooon!!',
    author: 'Karanja',
  },
  {
    title: 'Elio',
    content: 'Another Animation',
    paragraph: 'Kid wants attention from parent, parent does not give,since parent is single parenting mother, working in the military, damn, sad, waits fow alien to abduct, gets abducted, cool cool alien stuff, reuniiiiooonnnn',
    author: 'Me, Joyline',
  },
  {
    title: 'Lilo and Stitch',
    content: 'Alien and child become friends',
    paragraph: 'Two orphans, older sister acts as guardian, they fight, kid prays to get a friend, lol, queue stitch, the movie is literally on the aspect of child being friends with wierd alien, and more aliens are still around and they help ythem find their purpose...',
    author: 'Again, Wangui',
  }
])
// is false and null to avoi
const showModal = ref(false)
const selectedBlog = ref(null)
const formOpen = ref(false)

function openBlog(index) {
  selectedBlog.value = blogPosts.value[index]
  showModal.value = true
}

function closeModal() {
  showModal.value = false
  selectedBlog.value = null
}

function addBlog(blog) {
  if (blog.index !== undefined) {
    // Editing an existing blog using that index specifically
    blogPosts.value[blog.index] = {
      title: blog.title,
      content: blog.content,
      paragraph: blog.paragraph,
      author: blog.author
    }
  } else {
    // this is when we want to create a new blog though if there is no index defined here
    blogPosts.value.push(blog)
  }
  formOpen.value = false
}
// splice, is used in vue to modify the contents of an array
//  by removing or adding elements
function deleteBlog(index) {
  blogPosts.value.splice(index, 1)
}
//to edit each post based on the index, have the index value, and take the deatils initially there
//add the details to the form then after edit, post the new details on the same index
function editBlog(index) {
  const post = blogPosts.value[index]
  selectedBlog.value = { ...post }
  selectedBlog.value.index = index
  formOpen.value = true
}

</script>
<!-- the props are passed from parent to child here -->
<template>
  <div class="container">
    <div class="grid-container">
      <BlogPost
        v-for="(post, index) in blogPosts"
        :key="index"
        :index="index"
        v-bind="post"
        @readBlog="openBlog"
        @editBlog="editBlog"
        @deleteBlog="deleteBlog"
      />
    </div>

    <button class="add-btn" @click="formOpen = !formOpen">
      {{ formOpen ? 'Cancel' : 'Add Your Own Blog' }}
    </button>

    <BlogForm
      v-if="formOpen"
      :blog="selectedBlog"
      @submitBlog="addBlog"
    />

    <BlogModal v-if="showModal" :blog="selectedBlog" @close="closeModal" />
  </div>
</template>

<style scoped>
.container {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}

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
