// File: src/services/bookingService.js

import api from "./api";

export const bookRoom = (bookingData) => api.post("/bookings", bookingData); 
export const getBookings = () => api.get("/bookings"); 
export const approveBooking = (id) => api.put(/bookings/${id}/approve); export const denyBooking = (id) => api.put(/bookings/${id}/deny);

