import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filteredRes } from "../utils/helper";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RestaurantCard from "../components/RestaurantCard";
import { RxCross1 } from "react-icons/rx";
import { RiSearchLine } from "react-icons/ri";
import { addIntoRecentSearch } from "../utils/Slices/RecentSearchSlice";

const SearchBar = () => {
  // const CartItems = useSelector((store) => store.cart.items);
  const [searchItem, setSearchItem] = useState("");
  // const [recentsearch, setRecentSearch] = useState([

  // ]);
  let recentsearch = useSelector((store) => store.allRecentSearch.RecentSearch);
  const dispatch = useDispatch();

  const [filterRestaurant, setFilterRestaurant] = useState([]);

  function clearRecentSearch() {
    // setRecentSearch([]);
    dispatch(addIntoRecentSearch([]));
    toast.info("Cleared", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  const allRestaurant = useSelector((store) => store.allRest.AllRestItems);
  const [toggle, setToggle] = useState("true");
  console.log("All restau from Search BAr", allRestaurant);

  const filterData = (searchItem) => {
    dispatch(addIntoRecentSearch(recentsearch.concat(searchItem)));
    // setToggle(false);
    const data = filteredRes(searchItem, allRestaurant);
    setFilterRestaurant(data);
  };
  console.log("Recent Searches", recentsearch);
  // if (filterRestaurant.length) {
  //   setToggle(false);
  // }
  console.log("search Result filteredRestau", filterRestaurant);

  return (
    <div className="mt-[100px] flex  justify-center">
      <div className="flex flex-col  w-[1000px] ">
        <div className=" mx-auto relative justify-center">
          <input
            type="text"
            className=" border-[1px] italic  w-[1000px] text-[#686B78] border-solid border-gray-300 h-10 rounded-md px-3 "
            placeholder="Let's Heist food..."
            value={searchItem}
            onChange={(e) => {
              (e.target.value.length ===0 )?(<div></div>):( setSearchItem(e.target.value) || filterData(searchItem));
            }}
          ></input>
          {!(filterRestaurant.length > 0) ? (
            <button
              onClick={() => {
                filterData(searchItem);
              }}
              className="hover:cursor-pointer absolute mt-[8px] text-[#686B78] text-[25px] font-light -translate-x-[30px] mr-[6px]"
            >
              <RiSearchLine />
            </button>
          ) : (
            <button
              onClick={() => {
                setSearchItem(""), setFilterRestaurant([]);
              }}
              className="hover:cursor-pointer text-xl absolute text-[#686B78] mt-[10px] -translate-x-[28px] mr-[8px]  "
            >
             
              <RxCross1 />
            </button>
          )}
        </div>
        {/* after Search bar */}

        {!(filterRestaurant.length > 0) ? (
          <div className="ml-6">
            <div className="mt-10   flex flex-col">
              {recentsearch.length > 0 && (
                <div className="flex">
                  <h1 className="text-[#3D4152] text-[16px]  font-bold">
                    Recent Searches
                  </h1>
                  <div className="ml-10 bg-orange-500 rounded-full flex text-white text-center justify-center w-[50px]">
                    {<button onClick={() => clearRecentSearch()}>Clear</button>}
                  </div>
                </div>
              )}
              {/* show Recent searches by map */}
              <div className="flex flex-col relative gap-3  mt-3">
                {recentsearch.map((search, index) => {
                  return (
                    <div className="  flex flex-col gap-3   ">
                      <div className=" flex gap-3 ">
                        {" "}
                        <div className="mt-[6px] text-[#686B78] text-xl">
                          {" "}
                          <RiSearchLine />
                        </div>
                        <button
                          onClick={() => {
                            filterData(searchItem);
                          }}
                        >
                          <div className="text-[#686B78] text-lg">{search}</div>
                        </button>
                      </div>
                      <div className="w-[910px] h-[1px] mx-auto bg-[#E9E9EB] "></div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Popular Cuisines */}
            <div className="mt-[30px] ">
              <h1 className="text-[#3D4152] text-[20px] font-bold">
                Popular Cuisines
              </h1>
              {/* list of poupular cusines */}
              <div className="flex flex-wrap"></div>
            </div>
          </div>
        ) : (
          <div className="flex mx-auto mt-[50px]  flex-wrap">
            {filterRestaurant.map((restaurant, index) => {
              return (
                <Link to={"/restaurant/" + restaurant?.info?.id} key={index}>
                  <RestaurantCard {...restaurant?.info} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
