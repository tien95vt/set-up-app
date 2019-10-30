import axios from 'axios';

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // headers: {'X-Custom-Header': 'foobar'}
});

export default instance;