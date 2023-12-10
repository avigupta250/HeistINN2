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
 
    },
    removeItem: (state, action) => {
  
      const item = action.payload;
      console.log("item form remove cart",item)
   
      const id=item.id;
      const existingItem = state.items.find((item) => item.id === id);
 
    console.log("printing id",id)


      if (existingItem.quantity >1) {
        existingItem.quantity-=1;
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
