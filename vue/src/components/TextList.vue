<!-- TextList.vue -->
<template>
  <div>
    <h1>Texts</h1>
    <ul v-if="texts && texts.length > 0">
      <li v-for="text in texts" :key="text.id">
        <strong>{{ text.title }}</strong>: {{ truncatedText(text.content) }}
      </li>
    </ul>
    <p v-else>No texts available.</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// Define props
const props = defineProps({
  texts: {
    type: Array,
    required: true
  }
});

// Function to truncate text content
const truncatedText = (content: string, maxLength: number = 100) => {
  return content.length > maxLength ? content.slice(0, maxLength) + '...' : content;
};
</script>
