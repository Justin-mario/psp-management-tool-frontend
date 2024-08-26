import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { developerChangePassword } from '../redux/developer/developerAction'
import {toast, Toaster} from "react-hot-toast"

const DevPassword = () => {
    const [newPassword, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const dispatch = useDispatch()

    const {devInfo, loading} = useSelector(state => state.developer)
    // console.log(devInfo.id)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(newPassword !== confirmPassword){
            toast.error("Passwords don't match")
        }
        let id = devInfo.id
        dispatch(developerChangePassword({newPassword, id}))
    }

    // useEffect(() => {
    //     if(success){
    //       toast.success("Password has been changed successfully")
    //     }
    // }, [])

  return (
    <div className='w-[50%] md:mx-auto pt-[10rem] px-4 md:px-0'>
        <h3 className='text-3xl font-bold mb-7'>Developers' Sign In page</h3>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="name" className='font-lexend mr-6'>Password:</label>
                    <input 
                        type="password" 
                        className='p-1 flex w-[65%] rounded-md text-black border border-deepgreen'
                        onChange={(e) => setPassword(e.target.value)}
                        value={newPassword}
                    />
                </div>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="name" className='font-lexend mr-6'>Confirm Password:</label>
                    <input 
                        type="password" 
                        className='p-1 flex w-[65%] rounded-md text-black border border-deepgreen'
                        // value={password}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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

export default DevPassword