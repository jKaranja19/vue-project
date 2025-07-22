<script setup>
defineProps:{['title', 'content', 'paragraph']}
</script>
<template>
    <h2>{{ title }}</h2>
    <h3>{{ content }}</h3>
    <h4>{{ paragraph }}</h4>
</template>