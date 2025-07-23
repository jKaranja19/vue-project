<script setup>
// this should be the child component
// it receives the properties from the parent and displays a single blog and the parent displays all the posts.
// it's a reusable view on other parts
const props = defineProps({
    'title': String, 
    'content': String, 
    'paragraph': String, 
    'author':String
})

</script>
<template>
    <div class="blog-post">
        <h2>{{ title }}</h2>
        <h3>{{ content }}</h3>
        <p>{{ paragraph }}</p>
        <p><em>{{ author }}</em></p>
    </div>
</template>

<style>
.blog-post {
  margin-bottom: 2rem;
}
</style>