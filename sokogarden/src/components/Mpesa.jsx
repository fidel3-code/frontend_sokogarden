import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Mpesa = () => {

  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  const[phone,setPhone]=useState("")

  const submit=async(e)=>{
    setLoading("Please wait...")
    e.preventDefault()

    try {
      const data=new FormData()
      data.append("amount",product.product_cost)
      data.append("phone",phone)

      const response=await axios.post("http://fidel.alwaysdata.net/api/mpesa_payment",data)
      console.log("The response is",response);

      setSuccess(response.data)
      setLoading("")
      
    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }

  }


  const image_url="http://fidel.alwaysdata.net/static/images/"
  // Receive the parsed data from get products
  const{product}=useLocation().state || {}
  return (
    <div className='row justify-content-center'>

      
      <h1>Make payments-Lipa na mpesa</h1>
      <p className='text-warning'>{loading}</p>
      <p className='text-success'>{success}</p>
      <p className='text-danger'>{error}</p>

      <img src={image_url +product.product_photo} alt="product" className='product_img mt-1' />

      <p className='text-success display-5'>{product.product_name}</p>
      <p className='text-danger display-6'>ksh:{product.product_cost}</p>

      <div className='col-md-6 mt-4'>
         <form action="" onSubmit={submit}>
        <input type="tel" placeholder='Enter phone number starting with 254' className='form-control' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        <br />
        <button className='btn btn-success w-100 btn-outline-warning'>Make payments</button>
        </form>

      </div>
        
    </div>
  )
}

export default Mpesa