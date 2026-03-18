import React from 'react'
import { useState ,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const GetProducts = () => {
const[loading,setLoading]=useState("")
const[error,setError]=useState("")
const[products,setProducts]=useState([])

const navigate=useNavigate()

// variable to store image
const image_url="http://fidel.alwaysdata.net/static/images/"

// create a function to get our products from the api

const fetchProducts=async()=>{

  setLoading("Please wait as we retrieve your products")

  try {

    const response=await axios.get("http://fidel.alwaysdata.net/api/getproductdetails")
    setProducts(response.data)
    console.log("The response is",response)
    setLoading("")
    
    
  } catch (error) {
    setLoading("")
    setError(error.message)
    
  }
}
// end of funtion
// calling the useEffect

useEffect(()=>{
  fetchProducts()
},[])
  
  return (
    <div className='row'>
      <h1>Available Products</h1>
      <input type="search" placeholder='Search for products...' className='form-control'/>
      <p className='text-warning'>{loading}</p>
      <p className='text-danger'>{error}</p>

      {/* loop through our products and get each products individualy */}

      {products.map((product)=>(

      

      <div className='col-md-3 justify-content-center'>
      <div className='card shadow margin-3'>

       {/* concartinating */}
        <img src={image_url +product.product_photo} alt="product" className='product_img mt-4' />

        <div className='card-body'>

          <h4 className='text-success'>{product.product_name}</h4>
          <p className='text-secondary'>{product.product_description}</p>
          <p className='text-warning'>ksh:{product.product_cost}</p>
          {/* button that leads us to M-pesa ,it moves with the product(parse data) */}
          <input type="button" className='btn btn-success w-100' value="Purchase Now"onClick={()=>navigate("/mpesa",{state:{product}})}/>

        </div>


       </div>
      </div>
      ))}
        
    </div>
  )
}

export default GetProducts