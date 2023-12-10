import { createSlice } from "@reduxjs/toolkit";
import { restaurants } from "../../../config";

const AllRestaurantSlice = createSlice({
  name: "AllRestaurant",
  initialState: {
    AllRestItems: restaurants,
  },
  reducers: {
    addRestaurants: (state, action) => {
      state.AllRestItems = action.payload;
    },
    filtOnDelTime: (state, action) => {
      state.AllRestItems.sort((a, b) => {
        return a?.info?.sla?.deliveryTime -b?.info?.sla?.deliveryTime;
      });
    },
    filtByRating:(state,action)=>{
        state.AllRestItems.sort((a,b)=>{
            return b?.info?.avgRatingString -a?.info?.avgRatingString;
        })
    },
    filtByCostByTwo:(state,action)=>{
        state.AllRestItems.sort((a,b)=>{
            return b?.info?.costForTwo -a?.info?.costForTwo;
        })
    },
  },
});

export const { addRestaurants ,filtOnDelTime,filtByRating,filtByCostByTwo} = AllRestaurantSlice.actions;
export default AllRestaurantSlice.reducer;
