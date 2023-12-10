import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./Slices/cartSlice";
import AllRestaurantSlics from "./Slices/AllRestaurantSlics";
import RecentSearchSlice from "./Slices/RecentSearchSlice";
import ShowModal from "./Slices/ShowModal";
import UserSlics from "./Slices/UserSlics";

const store=configureStore({
    reducer:{
        cart:cartSlice,
        allRest:AllRestaurantSlics,
        allRecentSearch:RecentSearchSlice,
        modal:ShowModal,
        user:UserSlics

    }

})

export default store;