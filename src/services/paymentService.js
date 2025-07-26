// File: src/services/paymentService.js 

import api from "./api";

export const submitPayment = (paymentData) => api.post("/payments", paymentData); 
export const getPayments = () => api.get("/payments");

