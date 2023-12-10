import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../utils/Slices/ShowModal";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { setUser } from "../utils/Slices/UserSlics";
const AuthModal = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [onSubmit,setOnSubmut]=useState(true);
  const viewModal = useSelector((store) => store.modal.showModal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const User = useSelector((store) => store.user.user);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const toggleAuthType = () => {
    // setOnSubmut(false)
    setIsSignUp(!isSignUp);
  };


  const submitHandler = (e) => {
    e.preventDefault();
    // toggleAuthType();
    setOnSubmut(false)

    const { firstName, lastName, email, password, confirmPassword } = formData;

    dispatch(setModal(false));
    dispatch(setUser(firstName));
    console.log("loggedIn User", User);
   

    
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  
 

  return createPortal(
    <div className="container   ">
      <div className="fixed bg-none inset-0 flex items-center justify-center ">
        <div className=" bg-gray-300 w-[600px] ">
          <div className=" p-6  rounded shadow-lg ">
            <button
              onClick={() => dispatch(setModal(false))}
              className="text-black flex w-full justify-end  text-[30px] hover:text-orange-500"
            >
              <RxCross2 />
            </button>
            <div className="flex">
              <h2 className="text-2xl mb-4">
                {isSignUp ? "Sign Up" : "Login"}
              </h2>
            </div>
            {/* signup */}
            {
              onSubmit?(
                <form >
                  {/* Common form fields for both Sign Up and Login */}
                  {/* First Name */}
    
                  {isSignUp && (
                    <div className="mb-4">
                      <label className="block mb-2" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        required
                        type="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={changeHandler}
                        id="firstName"
                        className="w-full p-2 border rounded"
                        placeholder="First Name"
                      />
                    </div>
                  )}
                  {/* Last Name */}
                  {isSignUp && (
                    <div className="mb-4">
                      <label className="block mb-2" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        // required
                        type="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={changeHandler}
                        id="lastName"
                        className="w-full p-2 border rounded"
                        placeholder="Last Name"
                      />
                    </div>
                  )}
    
                  {/* Email */}
                  <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      // required
                      value={formData.email}
                      name="email"
                      onChange={changeHandler}
                      type="email"
                      id="email"
                      className="w-full p-2 border rounded"
                      placeholder="Email"
                    />
                  </div>
    
                  {/* Password */}
                  <div className="mb-4">
                    <label className="block mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      // required
                      value={formData.password}
                      name="password"
                      onChange={changeHandler}
                      type="password"
                      id="password"
                      className="w-full p-2 border rounded"
                      placeholder="Password"
                    />
                  </div>
                  {/* Confirm Password */}
                  {isSignUp &&(
                    <div className="mb-4">
                      <label className="block mb-2" htmlFor="confirm-password">
                        Confirm Password
                      </label>
                      <input
                        // required
                        value={formData.confirmPassword}
                        name="confirmPassword"
                        onChange={changeHandler}
                        type="password"
                        id="confirm-password"
                        className="w-full p-2 border rounded"
                        placeholder="Confirm Password"
                      />
                    </div>
                  )}
    
                  <button onClick={()=>{isSignUp?(toggleAuthType):(submitHandler(e))} }className="w-full bg-blue-500 rounded-md text-white text-center">
                    <div className="  m-1">
                      {isSignUp ? <h1>Sign Up</h1> : <h1>login</h1>}
                    </div>
                  </button>
                  {/* Toggle between Sign Up and Login */}
                  <p className="text-center">
                    {isSignUp
                      ? "Already have an account? "
                      : "Don't have an account? "}
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={toggleAuthType}
                    >
                      {isSignUp ? "Log in" : "Sign up"}
                    </span>
                  </p>
                </form>
                ):(
                  <form>
                  <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      // required
                      value={formData.email}
                      name="email"
                      onChange={changeHandler}
                      type="email"
                      id="email"
                      className="w-full p-2 border rounded"
                      placeholder="Email"
                    />
                  </div>
    
                  {/* Password */}
                  <div className="mb-4">
                    <label className="block mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      // required
                      value={formData.password}
                      name="password"
                      onChange={changeHandler}
                      type="password"
                      id="password"
                      className="w-full p-2 border rounded"
                      placeholder="Password"
                    />
                  </div>
                  </form>
               )
            }
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modalDiv")
  );
};

export default AuthModal;
