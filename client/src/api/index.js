import axios from "axios";
const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});



export const fetchItems = (department) => API.get(`/items/${department}`);
export const postItem = (item) => API.post(`/items/`, item);
export const logIn = (userData) => API.post('/user/login',userData);
export const signUp = (userData) => API.post('/user/signup',userData);
export const buyItem = (items) => API.patch(`/user/buyItems`, items);
export const getItemsByIds = (ids) => API.post(`/items/getItemsByIds`,ids);