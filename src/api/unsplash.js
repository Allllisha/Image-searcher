import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID 1Drx0kMqr86FKVRLqeA3omXm_sU3HDNVBz83fGSewuw'
  }
});

