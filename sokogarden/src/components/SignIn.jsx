import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios, { Axios } from 'axios'
const SignIn = () => {

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const[loading,setLoading]=useState("");
  const[success,setSuccess]=useState("");
  const[error,setError]=useState("");

  const navigate= useNavigate();

  const submit=async(e)=>{
    e.preventDefault()
    setLoading("Please wait as we upload your data...")
    
    

    try {
      const data=new FormData()

      data.append("email",email)
      data.append("password",password)


      // post above data to Backend API
      const response=await axios.post("http://fidel.alwaysdata.net/api/signin",data);
      console.log("the response is",response);

      setLoading("")

      // check if response has user item

      if (response.data.user){
        // If user is Found,Store user details in local storage
        localStorage.setItem("user",JSON.stringify(response.data.user));
        setSuccess(response.data.message);

        // Redirect to /getproducts component
        setTimeout(()=>{

          navigate("/");
        },2000)
      }

      else{
        // user not found,show error message
        setError(response.data.message);
      }
      
    } catch (error) {
      setLoading("");
      setError(error.data.message);
      
      
      
      
    }


  }
  
  return (
    <div className='row justify-content-center' >
      <div className='col-md-6 card shadow'>

        <h1>Sign In</h1>

        <form action="" onSubmit={submit}> 

          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

          <input type="email" placeholder='Email' className='form-control' value={email}
          onChange={(e)=>setEmail(e.target.value)} required/>

          <br /><br />

          <input type="password" placeholder='Password' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)} required/>

          <br /><br />

          <input type="submit" value='Sign In' className='btn btn-success text-white w-100 btn-outline-warning'/>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>



        </form>




      </div>
        
    </div>
  )
}

export default SignIn