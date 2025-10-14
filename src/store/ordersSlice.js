"use client";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [], // {id, items, total, date}
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.unshift(action.payload);
    },
    clearOrders: (state) => {
      state.orders = [];
    }
  }
});

export const { addOrder, clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
