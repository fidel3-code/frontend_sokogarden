import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const AddProduct = () => {
  const[product_name,setProduct_name]=useState()
  const[product_description,setProduct_description]=useState()
  const[product_cost,setProduct_cost]=useState()
  const[product_photo,setProduct_photo]=useState()

  const[loading,setLoading]=useState()
  const[success,setSuccess]=useState()
  const[error,setError]=useState()

  const submit=async(e)=>{
    e.preventDefault()
    setLoading("Wait as we upload your product")

    try {
      const data=new FormData()
      data.append("product_name",product_name)
      data.append("product_description",product_description)
      data.append("product_cost",product_cost)
      data.append("product_photo",product_photo)

      const response=await axios.post("http://fidel.alwaysdata.net/api/addproducts",data)

       setLoading("")

      setSuccess(response.data.message)

      setProduct_name("")
      setProduct_description("")
      setProduct_cost("")
      setProduct_photo("")

      
    } catch (error) {

       setLoading("")
      setError(error.message)

      setError("")

      
    }

  }
  return (
    <div className='row justify-content-center'>
        <div className='card shadow col-md-6'>
          <h2>Upload Products</h2>

          <form action="" onSubmit={submit}>

          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>


            <input type="text" placeholder='Enter Product Name' className='form-control' value={product_name} onChange={(e)=>setProduct_name(e.target.value)}required/>
            <br /><br />
            <textarea placeholder="Describe your Product" id="" className='form-control' value={product_description} onChange={(e)=>setProduct_description(e.target.value)}required></textarea>
            <br /><br />
            <input type="text" placeholder='Enter Product Cost' className='form-control' value={product_cost} onChange={(e)=>setProduct_cost(e.target.value)}required/>
            <br /><br />

            <h6><b>Upload Product photo</b></h6>

            <input type="file" placeholder="Choose File" className='form-control' accept='image/*' onChange={(e)=>setProduct_photo(e.target.files[0])} required/>
            <br />

             <input type="submit" value="Upload Product" id="" className='btn btn-success text-white w-100 btn-outline-warning'/>
          <br />







          </form>



        </div>


    </div>
  )
}

export default AddProduct