// CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // each item: { name, image, description, cost, quantity }
  },
  reducers: {
    // ➕ ADD ITEM
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.name === item.name);

      if (existingItem) {
        // If plant already exists, increase its quantity
        existingItem.quantity += 1;
      } else {
        // Add new plant with quantity = 1
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // ❌ REMOVE ITEM
    removeItem: (state, action) => {
      const name = action.payload; // expecting plant name
      state.items = state.items.filter((item) => item.name !== name);
    },

    // 🔄 UPDATE QUANTITY
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find((i) => i.name === name);

      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
