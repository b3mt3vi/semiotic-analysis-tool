<template>
    <div>
      <h1>Add New Text</h1>
      <form @submit.prevent="submitText">
        <input v-model="title" placeholder="Title" required />
        <textarea v-model="content" placeholder="Content" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    data() {
      return {
        title: '',
        content: ''
      };
    },
    methods: {
      submitText() {
        const newText = { title: this.title, content: this.content };
        api.addText(newText)
          .then(() => {
            alert('Text added!');
            this.title = '';
            this.content = '';
          })
          .catch(error => {
            console.error('Error adding text:', error);
          });
      }
    }
  }
  </script>
  