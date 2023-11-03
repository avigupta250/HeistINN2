import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const { id, name, price, imageId } = item.card.info;
      const existingItem = state.items.find((item) => item.id === id);

      if(existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({id,name,price,imageId,quantity:1});
      }
      
      
      // state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // state.items.pop();


      const item = action.payload;
      let { id, quantity } = item;

      if (quantity >0) {
        item.quantity = quantity - 1;
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
     clearCart:(state) => {
     state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
