import { createSlice } from '@reduxjs/toolkit'

export const AddToCart = createSlice({
  name: 'cart',
  initialState: {
    value: [],
    lastAdded: null, // store last added item for toast
  },
  reducers: {
    addtocart: (state, action) => {
      let existingItem = state.value.find(
        (item) => item.title === action.payload.title
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }

      state.lastAdded = action.payload; // set last added item
    },

    increment: (state, action) => {
      let existingItem = state.value.find(
        (item) => item.title === action.payload.title
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }
      // DO NOT update lastAdded
    },

    decrement: (state, action) => {
      let existingItem = state.value.find(
        (item) => item.title === action.payload.title
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.value = state.value.filter(
          (item) => item.title !== action.payload.title
        );
      }
      // DO NOT update lastAdded
    },

    removeItem: (state, action) => {
      state.value = state.value.filter(
        (item) => item.title !== action.payload.title
      );
      // DO NOT update lastAdded
    },
  },
});

export const { addtocart, increment, decrement, removeItem } = AddToCart.actions;

export default AddToCart.reducer;
