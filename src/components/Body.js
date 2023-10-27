import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_LIST_URL } from "../../config";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import useOnline from "../utils/useOnline";
import "react-toastify/dist/ReactToastify.css";
import Carousel from "./Carousel.js";
import {
  addRestaurants,
  filtOnDelTime,
  filtByRating,
  filtByCostByTwo,
} from "../utils/Slices/AllRestaurantSlics";

//   https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1119261&lng=79.0878065&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

const Body = () => {
  let allRestaurant = useSelector((store) => store.allRest.AllRestItems);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Use Effect called");
    getRestraurant();
  }, []);

  async function getRestraurant() {
    try {
      console.log("get res called");
      const data = await fetch(RES_LIST_URL);
      const json = await data.json();
      const resData =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      allRestaurant = allRestaurant.concat(resData);
      dispatch(addRestaurants(allRestaurant));
      toast.success("API Fetched Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });

      console.log("Printing json ", json);
      console.log("fetched  restau", resData);
      console.log("All restau", allRestaurant);
    } catch (error) {
      console.error("Fetch error");
      toast.error("Trouble in Fetching API", {
        position: toast.POSITION.TOP_RIGHT,
      });
      toast.info("Rendering  Prefetched ", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  const Online = useOnline();
  // console.log("online",isOnline)

  if (!Online) return <h1>You are offline</h1>;

  console.log("render from body.js");
  console.log("All restau", allRestaurant);

  // Conditional Rendering
  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full   bg-white flex flex-col  min-h-screen scroll ">
      <div className="w-full   h-[300px] bg-white ">
        <Carousel />
      </div>
      {/* <h1 className="text-[100px] flex z-10 text-black">Hello</h1> */}
      <div className="w-[1200px] mt-[80px] mx-auto">
        <div className=" w-[1200px]   h-[500px]   flex justify-center ">
          <div className="flex flex-col gap-4 ">
            <div className=" flex h-[10px] w-[1200px]  text-black "></div>
            <h1 className="font-bold text-xl ml-3 ">
              Restaurants With Online Food Delivery In Bangalore
            </h1>
            <div className="w-[120px] justify-center flex h-[10px] bg-gray-700"></div>
            {/* buttons */}

            <div className="flex gap-4 mt-4 ml-5">
              <div className="w-fit">
                <button
                  className={`text-center items-center flex p-3 text-[13px] sm:text-[16px] px-6 py- rounded-full h-[30px] border-gray-300 border-[1px] 
          bg-gray-50 text-black 
      hover:shadow-none hover:scale-95 transition-all duration-200 `}
                >
                  <div
                    onClick={() => dispatch(filtOnDelTime())}
                    className="flex items-center gap-3"
                  >
                    Fast Delivery
                  </div>
                </button>
              </div>
              <div className="w-fit"></div>
              <div className="w-fit">
                <button
                  onClick={() => dispatch(filtByRating())}
                  className={`text-center items-center flex p-3 text-[13px] sm:text-[16px] px-6 py- rounded-full h-[30px] border-gray-300 border-[1px] 
          bg-gray-50 text-black 
      hover:shadow-none hover:scale-95 transition-all duration-200 `}
                >
                  <div className="flex items-center gap-3">Rating</div>
                </button>
              </div>
              <div className="w-fit">
                <button
                  onClick={() => dispatch(filtByCostByTwo())}
                  className={`text-center items-center flex p-3 text-[13px] sm:text-[16px] px-6 py- rounded-full h-[30px] border-gray-300 border-[1px] 
          bg-gray-50 text-black 
      hover:shadow-none hover:scale-95 transition-all duration-200 `}
                >
                  <div className="flex items-center gap-3">Cost For Two</div>
                </button>
              </div>
            </div>

            {/* Restaurant card */}
            <div className="flex ml-7  flex-wrap">
              {allRestaurant.map((restaurant, index) => {
                return (
                  <Link to={"/restaurant/" + restaurant?.info?.id} key={index}>
                    <RestaurantCard {...restaurant?.info} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
    </div>
  );
};

export default Body;
