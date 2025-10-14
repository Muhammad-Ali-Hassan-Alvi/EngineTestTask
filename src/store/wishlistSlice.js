"use client";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // {id, title, price, image, size?}
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addWish: (state, action) => {
      const it = action.payload;
      if (!state.items.find((x) => x.id === it.id)) {
        state.items.push(it);
      }
    },
    removeWish: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((x) => x.id !== id);
    },
    toggleWish: (state, action) => {
      const it = action.payload;
      const exists = state.items.find((x) => x.id === it.id);
      if (exists) {
        state.items = state.items.filter((x) => x.id !== it.id);
      } else {
        state.items.push(it);
      }
    },
    clearWishlist: (state) => {
      state.items = [];
    }
  }
});

export const { addWish, removeWish, toggleWish, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
