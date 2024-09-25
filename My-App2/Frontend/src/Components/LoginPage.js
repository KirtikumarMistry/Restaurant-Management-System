// import React, { useState } from 'react'
// import toast from 'react-hot-toast'
// import { NavLink, useNavigate } from 'react-router-dom'

// function LoginPage() {
//     const [forgetPasswornd, setforgetPassword] = useState(false)
//     const navigate = useNavigate();
//     const [Loginuserdata, setLoginuserdata] = useState({
//         email: "",
//         password: ""
//     })
//     const [showerrorinemail, seterroremail] = useState(false);
//     const [showerrorinepass, seterrorpass] = useState(false);
//     const [statuscheck,setstatuscheck]=useState(false);
//     function Logintrack(event) {
//         if (event.target.name === "email") {
//             seterroremail(false)
//         }
//         if (event.target.name === "password") {
//             seterrorpass(false)
//         }
//         setLoginuserdata((prev) => {
//             return {
//                 ...prev,
//                 [event.target.name]: event.target.value
//             }
//         })
//     }

//     async function Submitloginform(event) {
//         event.preventDefault();
//         const LoginData = JSON.stringify(Loginuserdata);
//         const res = await fetch("http://localhost:5000/Login", {
//             method: "POST",
//             headers: {
//                 'content-type': "application/json"
//             },
//             body: LoginData
//         })
//         const data = await res.json();
//         console.log(data);
//         if(data.success)
//         {
//             toast.success(data.message)
//             navigate(`/${data.Accounttype}`)
//         }else
//         {
//             toast.error(data.message)
//             navigate(`/`)
//         }
//     }
//     return (
//         <div className='flex justify-center items-center h-screen'>
//             <div className="container flex justify-center items-center w-full">
//                 <div className
//                     ="login-box bg-white p-6 rounded-lg loginshadow w-80">
//                     <h1 className="text-center mb-6 text-2xl font-bold text-gray-800">Login</h1>
//                     <form method="POST" onSubmit={Submitloginform}>
//                         <div className="textbox mb-4">
//                             <label htmlFor="email" class="block mb-1 text-gray-700 text-start font-semibold">Email</label>
//                             <input type="email" id="email" name="email" value={Loginuserdata.email} placeholder="Enter your email" required className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 " onChange={Logintrack}></input>
//                             <div>
//                                 {
//                                     showerrorinemail && <p className=' text-red-600'>email does not exist</p>
//                                 }
//                             </div>
//                         </div>
//                         <div>
//                             {
//                                 forgetPasswornd ? <div className="textbox mb-4">
//                                     <label htmlFor="password" className="block mb-1 text-gray-700 text-start font-semibold"> New Password</label>
//                                     <input type="password" id="password" value={Loginuserdata.password} name="password" placeholder="Enter your password" required className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" onChange={Logintrack}></input>
//                                     <button type="submit" class="btn w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4" onClick={() => {
//                                         setforgetPassword(false)
//                                     }}>Reset</button>
//                                 </div> : (
//                                     <div>
//                                         <div className="textbox mb-4">
//                                             <label htmlFor="password" className="block mb-1 text-gray-700 text-start font-semibold">Password</label>
//                                             <input type="password" id="password" name="password" placeholder="Enter your password" required className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" onChange={Logintrack}></input>
//                                             <div>
//                                                 {
//                                                     showerrorinepass && <p className=' text-red-600'>password does not exist</p>
//                                                 }
//                                                 {
//                                                     statuscheck && <p className=' text-red-600'>Please wait for an admin to verify you</p>
//                                                 }
//                                             </div>
//                                         </div>
//                                         <button type="submit" className="btn w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
//                                         <p className="forgot block text-center mt-4 text-blue-500 hover:underline cursor-pointer" onClick={() => {
//                                             setforgetPassword(true)
//                                         }}>Forgot Password?</p>
//                                     </div>)
//                             }
//                         </div>
//                         <NavLink to="/signup" className="text-blue-500 hover:underline">Do not have a  Account?</NavLink>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LoginPage