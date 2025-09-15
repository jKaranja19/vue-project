import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    blogs: [] as any[]
  }),
  actions: {
    addBlog(blog: any) {
      this.blogs.push(blog)
      this.saveToLocalStorage()
    },
    updateBlog(index: number, updatedBlog: any) {
      this.blogs[index] = updatedBlog
      this.saveToLocalStorage()
    },
    deleteBlog(index: number) {
      this.blogs.splice(index, 1)
      this.saveToLocalStorage()
    },
    saveToLocalStorage() {
      localStorage.setItem('blogs', JSON.stringify(this.blogs))
    },
    loadFromLocalStorage() {
      const saved = localStorage.getItem('blogs')
      if (saved) {
        this.blogs = JSON.parse(saved)
      }
    }
  }
})
