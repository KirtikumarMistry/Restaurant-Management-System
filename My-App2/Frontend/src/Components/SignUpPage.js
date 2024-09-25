import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { NavLink, useNavigate } from 'react-router-dom'

function SignUpPage(props) {
  // const Navigate = useNavigate();
  const [data, usedata] = useState({
    success: false
  });
  const [userdata, setuserdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
  })
  function chnageHandler(event) {
    setuserdata((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
    console.log(userdata);
  }
  async function submitform(event) {
    event.preventDefault();
    const reqbody = JSON.stringify(userdata);
    console.log(reqbody);
    const res = await fetch('http://localhost:5000/Signup', {
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: reqbody
    })
    const fetchdata = await res.json();
    console.log(fetchdata);
    if (fetchdata.success) {
      toast.success(fetchdata.message)
      // props.setisLogedin(true);
      //  Navigate(`/smp/mainPage/${false}/${data.id}`)
    }
    else {
      usedata(
        {
          success: true,
          message: fetchdata.error
        }
      );
    }
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container flex justify-center items-center w-full">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <h1 className="text-center mb-6 text-2xl font-bold text-gray-800">Sign Up</h1>
          <form method="POST" onSubmit={submitform}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 text-gray-700 text-start font-semibold">Name</label>
              <input type="text" id="name" value={userdata.name} onChange={chnageHandler}
                name="name" placeholder="Enter your name" required className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"></input>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 text-gray-700 text-start font-semibold">Email</label>
              <input type="email" value={userdata.email} id="email" placeholder="Enter your email" required className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                name='email' onChange={chnageHandler}></input>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1 text-gray-700 text-start font-semibold">Password</label>
              <input type="password" value={userdata.password} id="password" placeholder="Enter your password" required className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                name='password' onChange={chnageHandler}></input>
            </div>
            <div className="mb-4">
              <label htmlFor="confirm-password" className="block mb-1 text-gray-700 text-start font-semibold">Confirm Password</label>
              <input type="password" value={userdata.confirmpassword} id="confirm-password" placeholder="Confirm your password" required className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                name='confirmpassword' onChange={chnageHandler}></input>
              {
                data.success && <p className=' text-red-600 mt-2'>{data.message}</p>
              }
            </div>
            <button type="submit" id="signup-btn" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Sign Up</button>
          </form>
          <p className="text-center mt-4 text-gray-600">Already have an account?
            <NavLink to="/" className="text-blue-500 hover:underline">Log In</NavLink></p>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage