import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../../config";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { removeItem } from "../utils/Slices/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeliveryAdd from "./DeliveryAdd.js";
// import {Cart} from "../assets/Cart.png"

const Cart = () => {
  const CartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  
  let price = 0;
  CartItems.forEach((item) => {
    price +=item?.price
      ? item?.price / 100
      : defaultPrice / 100;
  });

  console.log("Total Peice", price);

  console.log("Cart Item", CartItems);
  return (
    <div className="bg-gray-200 mt-[100px]">{
      !(CartItems.length===0)? (
      <div className=" flex flex-col items-center justify-center ">
        <div className="w-[1200px] mb-[300px] sticky top-[100px] mx-auto flex ">
          {/* Personal and delivery info */}
          <div className="w-[700px]">
            <DeliveryAdd/>
          </div>
          {/* Cart Details */}
          <div className="w-[460px] ml-[40px] border-[1px] border-gray-500 bg-white ">
            <div className="">
              {/*Restaurant Name  */}
              <div></div>
              {/* item Added */}
              <div className="flex flex-col p-5 gap-4">
                {CartItems.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="flex border relative border-gray-200 p-2   gap-3">
                        <img
                          className="w-[100px] h-[90px]  object-cover"
                          src={IMG_CDN_URL + item?.imageId}
                        ></img>
                        <div>
                          <h2 className=" text-gray-600 ml-1 w-[230px] flex flex-wrap font-serif font-bold">
                            {item?.name}
                          </h2>
                          <span className="ml-1 text-gray-700">
                            {" "}
                            ₹
                            {item?.price
                              ? item?.price / 100
                              : item?.defaultPrice / 100}
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            dispatch(removeItem(item));
                            toast.info("Item removed from Cart", {
                              position: toast.POSITION.TOP_RIGHT,
                            });
                          }}
                          className="bg-red-600 absolute flex text-white w-fit h-fit p-1 justify-end"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}

                <div className="bg-gray-900 w-full h-[2px] "></div>
                <div className="flex p-1 text-gray-900 font-bold justify-between">
                  <h1> TO PAY</h1>
                  <h1 className="flex items-center ">
                    {
                      <div className="text-lg mt-[1px] font-[900]">
                        <LiaRupeeSignSolid />
                      </div>
                    }
                    {price}
                  </h1>
                </div>

                <div className="bg-[#60B246] w-full h-[35px] flex justify-center items-center  ">
                  <h1 className=" text-white text-[16px] font-[900] leading-[29px]">
                    PROCEED TO PAY
                  </h1>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      ):(
      <div className="flex h-[80vh] flex-col gap-4 justify-center items-center">
        <h1 className=" text-gray-600 text-[50px] flex-wrap font-serif font-bold">
          Your Cart is Empty
        </h1>
        <h1 className=" text-gray-400 text-[30px] flex-wrap font-serif font-bold">
          You can go to home page to view more restaurants{" "}
        </h1>
        <Link to="/">
          {" "}
          <button className="h-[40px] p-3 flex items-center  text-white text-[20px] font-[900] leading-[29px]  bg-orange-500">
            SEE RESTAURANTS NEAR YOU
          </button>
        </Link>
      </div>
      )
}
    </div>
  );
};

export default Cart;
