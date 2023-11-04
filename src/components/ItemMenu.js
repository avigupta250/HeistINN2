import { CgSquare } from "react-icons/cg";
import { BsPlus } from "react-icons/bs";
import { BiMinus, BiPlus } from "react-icons/bi";
import { IMG_CDN_URL } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/Slices/cartSlice";
import { Logo } from "../assets/HeistINN.png";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ItemMenu = (props) => {
  const dispatch = useDispatch();

  const AddFoodItem = (item) => {
    dispatch(addItem(item));
    toast.success("Item Added to Cart", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
    toast.info("Item removed from Cart", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const cartList = useSelector((store) => store.cart.items);

  // console.log("Printing Cart item" ,cartList)

  // console.log("ItemCard type", typeof props);
  console.log("printing item card", props.itemCard);
  return props.itemCard.map((item, index) => {
    return (
      <div className=" flex ">
        <div className=" item-menu  mt-2  p-3  flex  flex-col" key={index}>
          <div className=" flex relative p-2 justify-between gap-4 ">
            <div>
              <div className="text-green-700  text-2xl">
                <CgSquare />
              </div>
              <span className="">
                <h2 className=" text-gray-600  ml-1 font-serif font-bold">
                  {item?.card?.info?.name}
                </h2>
              </span>
              <span className="ml-1 text-gray-700">
                {" "}
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
              <p className="ml-1 font-sans mt-6 text-gray-700">{`${item?.card?.info?.description}`}</p>
            </div>

            {/* image and button */}
            <div className="flex  flex-col items-center ">
              {/* image */}
              <div className=" w-[150px] max-h-[20px] mb-[130px]  rounded-md">
                <img
                  className=" rounded-xl w-[200px] h-[100px]"
                  alt="Item Image"
                  src={IMG_CDN_URL + item?.card?.info?.imageId}
                ></img>
              </div>
{ (cartList.find((itemm) => itemm.id == item?.card?.info?.id)
                      ?.quantity>0)?
             
             ( <div className="flex bg-green-600 text-white border rounded-md   w-[80px] h-[30px] gap-2 -translate-y-[60px] justify-between">
                <button
                  className="mr-1 ml-1"
                  onClick={() => removeFoodItem(item.card.info)}
                >
                  <BiMinus />
                </button>
                <div className="flex items-center">
                  {
                    cartList.find((itemm) => itemm.id == item?.card?.info?.id)
                      ?.quantity
                  }
                </div>
                <button className="mr-1 ml-1" onClick={() => AddFoodItem(item)}>
                  <BiPlus />
                </button>
              </div>):( <button
                onClick={() => AddFoodItem(item)}
                className="bg-green-600 text-white rounded-md p-1 -translate-y-[60px] w-[60px]"
              >
                Add
              </button>
             )
  }
            </div>
          </div>
          <div className="w-[800px]    h-[3px] bg-[#d3d3df]"></div>
        </div>
      </div>
    );
  });
};

export default ItemMenu;
