import { createSlice } from "@reduxjs/toolkit";

const ShowModal=createSlice({
    name:"Modal",
    initialState:{
        showModal:false
    },
    reducers: {
        setModal: (state, action) => {
            state.showModal=action.payload;
        
        }
      }
      

})

export const {setModal}=ShowModal.actions;
export default ShowModal.reducer