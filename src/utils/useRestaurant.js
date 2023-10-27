import { Menu_Api } from "../../config";
import { useState, useEffect } from "react";
import {  toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



export const useRestaurant = (resId) => {
  const [category, setCategory] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  // get data from api

  useEffect(() => {
    getRestauInfo();
  }, []);

  
    async function getRestauInfo() {
      try{
      const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.655381&lng=73.761024&restaurantId=${resId}&submitAction=ENTER`);
  
      const res = await data.json();
     
        const cate =
          res?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
              c.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );

      console.log(res);
      setRestaurant(res?.data?.cards[0]?.card?.card?.info);
      // console.log(res?.data?.cards[0]?.card?.card?.info)
      console.log(restaurant)
      setCategory(cate);
      toast.success("API Fetched Successfully", {
        position: toast.POSITION.TOP_CENTER
      })
    }
  catch(error){
    console.error("Fetch error");
    toast.error("Trouble in Fetching Restaurant API", {
      position: toast.POSITION.TOP_CENTER
  })

  }
}

  // return restau data

  return { restaurant, category };
};
