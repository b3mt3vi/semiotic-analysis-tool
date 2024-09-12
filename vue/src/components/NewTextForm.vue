<!-- NewTextForm.vue -->
<template>
  <form @submit.prevent="submitForm">
    <input v-model="title" placeholder="Title" required />
    <textarea v-model="content" placeholder="Content" required></textarea>
    <button type="submit">Add Text</button>
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['text-added']);

const title = ref('');
const content = ref('');

const submitForm = () => {
  console.log('Form submitted');
  const newText = {
    title: title.value,
    content: content.value
  };
  console.log('Emitting new text:', newText);
  emit('text-added', newText);
  title.value = '';
  content.value = '';
};
</script>

  