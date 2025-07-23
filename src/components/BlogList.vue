<template>
    <div>
    <BlogPost
      v-for="(post, index) in blogPosts"
      :key="index"
      :title="post.title"
      :content="post.content"
      :paragraph="post.paragraph"
      :author="post.author"
    />
  </div>
</template>
<script setup>
import BlogPost from './BlogPost.vue'
// the array of details we want to see on the child component.
// it dynamically feeds the data to child view
const blogPosts= [
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
]
</script>