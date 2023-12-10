import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../utils/Slices/ShowModal";
import {RxCross2} from "react-icons/rx"
import { useNavigate } from "react-router-dom";

import {  toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const AuthModal = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const showModal = useSelector((store) => store.modal.showModal);
  const dispatch = useDispatch();
  const Navigate=useNavigate();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const toggleAuthType = () => {
    setIsSignUp(!isSignUp);
  };

  function SignUp(){
    toast.success("Logged In");
    setTimeout( Navigate("/"),10000)
   
   

  }

  return createPortal(
   <div className="container  ">
     <div className="fixed  bg-none inset-0 flex items-center justify-center ">
     

     <div className=" bg-gray-300 ">
    

      <div className=" p-6  rounded shadow-lg w-80">
      <button onClick={() => dispatch(setModal(false))} className="text-black flex w-full justify-end  text-[30px] hover:text-orange-500"><RxCross2/></button>
      <div className="flex">
      
        <h2 className="text-2xl mb-4">{isSignUp ? "Sign Up" : "Login"}</h2> 
        
      </div>
      <form>
       
      
       <div className="mb-4">
         <label className="block mb-2" htmlFor="email">
           Email
         </label>
         <input
           type="email"
           id="email"
           className="w-full p-2 border rounded"
           placeholder="Email"
         />
       </div>

       <div className="mb-4">
         <label className="block mb-2" htmlFor="password">
           Password
         </label>
         <input
           type="password"
           id="password"
           className="w-full p-2 border rounded"
           placeholder="Password"
         />
       </div>

       {isSignUp && (
         <div className="mb-4">
           <label className="block mb-2" htmlFor="confirm-password">
             Confirm Password
           </label>
           <input
             type="password"
             id="confirm-password"
             className="w-full p-2 border rounded"
             placeholder="Confirm Password"
           />
         </div>
       )}

       {/* Action buttons */}
      

       <button   onClick={()=>SignUp()} className="w-full bg-blue-500 rounded-md text-white text-center">
        <div className="  m-1">{isSignUp ? <h1>Sign Up</h1> : <h1>login</h1>}</div>
       </button>
       {/* Toggle between Sign Up and Login */}
       <p className="text-center">
         {isSignUp ? "Already have an account? " : "Don't have an account? "}
         <span
           className="text-blue-500 cursor-pointer"
           onClick={toggleAuthType}
         >
           {isSignUp ? "Log in" : "Sign up"}
         </span>
       </p>
     </form>
        
      
      </div>
      </div>
    </div>
   </div>,
    document.querySelector(".modalDiv")
  );
};

export default AuthModal;


