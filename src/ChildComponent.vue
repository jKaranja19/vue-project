<script setup>
const props = defineProps({
  msg: String

})
const emit = defineEmits(['response'])
emit('response', 'hello from child')
</script>
<template>
  <h2>A Child Component!</h2>
  <p>{{ msg || 'No propos have been passed here yet' }}</p>
  <slot>Fallback content</slot>
</template>