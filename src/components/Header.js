import Logo from "../assets/HeistINN.png";
import { BsFillBagFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import AuthModal from "./AuthModal";
import {setModal} from "../utils/Slices/ShowModal";

const Header = () => {
  const showModal=useSelector((store)=>store.modal.showModal)
  const dispatch=useDispatch();

  console.log("ShowModel",showModal)

  const  CartItems = useSelector((store) => store.cart.items);
  const User = useSelector((store) => store.user.user);
  // const CartItems = ["Apple"];
  return (
    //  top level div
    <>
  
 
    <div className="w-full  fixed top-0 flex z-10 ">
      <div className="header w-full  flex  justify-center ">
        <div className="w-[1200px] flex justify-between items-center">
          <div className ="flex  ">
            <Link to="/">
              <img
                className="hover:scale-[1.05] transition-all 3ms"
                alt="logo"
                src={Logo}
                width={100}
                height={50}
              />
            </Link>
          </div>
          <div className="flex text-dec ">
            <ul className="flex gap-14">
              <Link to="/search">
                <li>
                  <div className="on-hover flex gap-1 -translate-x-[8px] ">
                    <div className="translate-y-[5px] text-lg ">
                      {" "}
                      <BiSearch />
                    </div>
                    <span>Search</span>
                  </div>
                </li>
              </Link>
              <Link to="/about">
                <li className=" on-hover ">About Us</li>
              </Link>
              <Link to="/contact">
                {" "}
                <li className="on-hover">Contact Us</li>
              </Link>
            
               
                <li   className="">
                  <Link to="/signIn">
                  <div  className=" on-hover  flex gap-1">
                    <div className=" text-2xl font-light">
                      <CgProfile />
                    </div>
                    <span  className="">{(User=="")?(<spna>Sign In</spna>):(<div className="text-orange-400 flex bg-black h-[23px] min-w-[50px] p-[8px] max-w-[250px] mx-auto items-center justify-center  rounded-xl">{User}</div>)}</span>
                    
                  </div></Link>
                </li>
              
             
              <Link to="/cart">
                <li className=" on-hover ">
                  <div className="flex relative  hover:text-orange-500 gap-1">
                    <div
                      className={`text-2xl ${
                        CartItems.length === 0
                          ? "bg-white "
                          : "text-green-600 hover:text-orange-500"
                      }`}
                    >
                      <BsFillBagFill />
                      <h1 className="absolute text-[12px] text-white translate-x-[9px] mx-auto -translate-y-[25px]">
                        {CartItems.length}
                      </h1>
                    </div>
                    <span className=" translate-x-[2px]">Cart</span>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        {/* <div className="black-header w-full h-[500px] bg-black"></div> */}
      </div>
      {/* <div className="black-header w-full h-[500px]  bg-black"></div> */}
    </div>
    </>
  );
};

export default Header;
