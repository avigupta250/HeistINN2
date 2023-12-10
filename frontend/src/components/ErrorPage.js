import { useRouteError } from "react-router-dom"
import {  toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const ErrorPage=()=>{
    const err=useRouteError();
    return(
        
        <div><h1>Oops!!Something went wrong ...May be API issues</h1>
            <h1>{err.status}</h1>
        <h3>{err.statusText}</h3>
        </div>
    )
}


export default ErrorPage