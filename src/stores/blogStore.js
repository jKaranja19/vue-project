// src/stores/blogStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [
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
    ]
  }),
  actions: {
    addPost(post) {
      if (post.index !== undefined) {
        // Update existing post
        this.posts[post.index] = {
          title: post.title,
          content: post.content,
          paragraph: post.paragraph,
          author: post.author
        }
      } else {
        // Add new post
        this.posts.push(post)
      }
    },
    deletePost(index) {
      this.posts.splice(index, 1)
    }
  },
  persist: true // This enables persistence
})