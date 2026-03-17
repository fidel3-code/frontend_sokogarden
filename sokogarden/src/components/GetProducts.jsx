import React from 'react'
import { useState ,useEffect } from 'react'
import axios from 'axios'


const GetProducts = () => {
const[loading,setLoading]=useState("")
const[error,setError]=useState("")
const[products,setProducts]=useState([])

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
      <p className='text-warning'>{loading}</p>
      <p className='text-danger'>{error}</p>

      {/* loop through our products and get each products individualy */}

      {products.map((product)=>(

      

      <div className='col-md-3 justify-content-center'>
      <div className='card shadow margin-3'>

        <img src={image_url +product.product_photo} alt="grapes" className='product_img mt-4' />

        <div className='card-body'>

          <h4 className='text-success'>{product.product_name}</h4>
          <p className='text-secondary'>{product.product_description}</p>
          <p className='text-warning'>ksh:{product.product_cost}</p>

        </div>


       </div>
      </div>
      ))}
        
    </div>
  )
}

export default GetProducts