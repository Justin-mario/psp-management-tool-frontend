import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { developerLogin } from '../redux/developer/developerAction'
import { Toaster, toast } from 'react-hot-toast'

const DeveloperSignin = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const {loading, devInfo} = useSelector(state => state.developer)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        let login = {username, password}
        dispatch(developerLogin(login))
    } 

    useEffect(() => {
        console.log("Admin Info:", devInfo);
    
        if (devInfo && typeof devInfo === "object") {
          if (devInfo === "Something went wrong" || devInfo === "Invalid username or password") {
            console.log("Error: Something went wrong. Redirecting to home.");
            navigate("/"); 
          }
          if (devInfo && devInfo.username) {
            console.log("Success: Admin Info has a username. Redirecting to dashboard.");
            toast.success("You have registered successfully");
            navigate("/dashboard"); 
          }
        } else {
          console.error("Admin Info is not a valid object:", devInfo);
        }
      }, [devInfo, navigate]);

  return (
    <div className='w-[50%] md:mx-auto pt-[10rem] px-4 md:px-0'>
        <h3 className='text-3xl font-bold mb-7'>Developers' Sign In page</h3>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="name" className='font-lexend mr-6'>Username:</label>
                    <input 
                        type="text" 
                        className='p-1 flex w-[65%] rounded-md text-black border border-deepgreen'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="name" className='font-lexend mr-6'>Password:</label>
                    <input 
                        type="password" 
                        className='p-1 flex w-[65%] rounded-md text-black border border-deepgreen'
                        // value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {loading && loading ? <p className='italic mt-0'>loading.....</p> : null}
                <div className='lg:mb-10 mb-6 flex items-center justify-start'>
                    <button className='bg-gray-600 font-bold flex items-center justify-center px-10 py-3 text-white hover:bg-black'>
                        Sign In
                    </button>
                </div>
            </div>
        </form>
        <Toaster
            position='top-right'
            toastOptions={{
                style:{
                    background: "#000",
                    color: "#fff"
                }
            }}
        />
    </div>
  )
}

export default DeveloperSignin