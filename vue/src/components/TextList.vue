<template>
    <div>
      <h1>Texts</h1>
      <ul>
        <li v-for="text in texts" :key="text.id">{{ text.title }} - {{ text.content }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    data() {
      return {
        texts: []
      };
    },
    mounted() {
      api.getTexts().then(response => {
        this.texts = response.data;
      }).catch(error => {
        console.error("Error fetching texts:", error);
      });
    }
  }
  </script>  