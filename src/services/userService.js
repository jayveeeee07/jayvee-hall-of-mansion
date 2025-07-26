// File: src/services/userService.js 

import api from "./api";

export const getUserInfo = (userId) => api.get(/users/${userId}); 
export const updateUser = (userId, data) => api.put(/users/${userId}, data); 
export const getAllUsers = () => api.get("/users");


  

  
