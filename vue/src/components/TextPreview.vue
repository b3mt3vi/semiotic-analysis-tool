<!-- TextList.vue -->
<template>
    <div class="text-list">
      <h1>Texts</h1>
      <div v-if="texts && texts.length > 0">
        <TextPreview
          v-for="text in texts"
          :key="text.id"
          :title="text.title"
          :content="text.content"
          icon="fas fa-file-alt"
          :maxLength="150" <!-- Adjust the maxLength as needed -->
        />
      </div>
      <p v-else>No texts available.</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import TextPreview from './TextPreview.vue';
  
  const props = defineProps({
    texts: {
      type: Array,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .text-list {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .text-list h1 {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .text-list > div > * + * {
    margin-top: 20px;
  }
  </style>
  