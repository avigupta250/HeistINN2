import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css"

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import Footer from "./components/babbarFooter";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
// import { Link } from "react-router-dom";
import ContactUsPage from "./components/ContactPage";
import RestrauMenu from "./components/RestrauMenu";
// import Profile from "./components/ProfileClass";
import Profile from "./components/Profile";
import { Suspense, lazy } from "react";
import {Provider} from "react-redux"
import store from "./utils/store";
import Cart from "./components/Cart";
import SearchBar from "./components/SearchBar";
// import { useSelector,useDispatch } from "react-redux";
// import {setModal} from "./utils/Slices/ShowModal";
import AuthModal from "./components/AuthModal";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Carousel from "./components/Carousel";
// import Shimmer from "./components/Shimmer";


const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => (
  
  <Provider store={store}>
    <div className="">
    <Header />
  
   <Outlet />

    {/* <Footer /> */}
  </div>
<ToastContainer/>

  </Provider>
);



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", 
            element: <Profile name={"Avi gupta"} />,
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactUsPage />,
      },
      {
        path: "/signIn",
        element: <SignUp/>,
      },
      {
        path: "/carousel",
        element: <Carousel/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/login",
        element: <AuthModal/>,
      },
      {
        path: "/search",
        element: <SearchBar />,
      },
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={()=>{ <h1>Wait its Loading</h1>}}>
            <Instamart/>
          </Suspense>
        ),
        
      },
      {
        path: "/restaurant/:resId",
        element: <RestrauMenu />,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
  },

  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render((<RouterProvider router={appRouter} />));

