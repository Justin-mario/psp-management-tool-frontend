import React, { useState } from 'react'
import { adminCreateDeveloper } from '../redux/admin/adminActions'
import { useDispatch, useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'

const DeveloperSignUp = () => {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.admin)

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("You clicked on the submit button")
        let developer = {username, email, password}
        dispatch(adminCreateDeveloper(developer))
    } 

    // useEffect(() => {
    //   if(devInfo){
    //     toast.success('Developer created successfully')
    //     // navigate("/dashboard")
    //   }
    //   if(error){
    //     toast.error("Unable to sign up")
    //   }
    
    // //   return () => {
        
    // //   }
    // }, [success, error, devInfo])
    


  return (
    <div className='w-[50%] md:mx-auto pt-[10rem] px-4 md:px-0'>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="name" className='font-lexend mr-6'>Username:</label>
                    <input 
                        type="text" 
                        className='p-1 flex w-full rounded-md text-black border border-deepgreen' 
                        name='username'
                        // value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="name" className='font-lexend mr-6'>Email:</label>
                    <input 
                        type="email" 
                        className='p-1 flex w-full rounded-md text-black border border-deepgreen' 
                        name='email'
                        // value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="name" className='font-lexend mr-6'>Password:</label>
                    <input 
                        type="password" 
                        className='p-1 flex w-full rounded-md text-black border border-deepgreen' 
                        name='password'
                        // value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {loading && loading ? <p className='italic mt-0'>loading.....</p> : null}
                <div className='lg:mb-10 mb-6 flex items-center justify-start'>
                    <button className='bg-gray-600 font-bold flex items-center justify-center px-10 py-3 text-white hover:bg-black'>
                        Create a Developer
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

export default DeveloperSignUp