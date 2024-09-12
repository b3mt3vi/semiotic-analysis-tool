// services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default {
  getTexts() {
    return apiClient.get('texts/');
  },
  addText(newText) {
    return apiClient.post('texts/', newText);
  },
  deleteText(id) {
    return apiClient.delete(`texts/${id}/`);
  }
};
