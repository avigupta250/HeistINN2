import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {

    const referenceNo=useSearchParams()[0].get("reference")
  return (
    <div className='flex top-[400px] text-black  bg-red-400 '>
        <h1  >Order Successfull</h1>
        <h1>Reference No.{referenceNo}</h1>
    </div>
  )
}

export default PaymentSuccess