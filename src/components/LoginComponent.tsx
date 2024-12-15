import { User } from "../interfaces/User"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"


export const LoginComponent = ()=>{

    const navigate = useNavigate()
    const [ user, setUser ] = useState<User>({
        email: "",
        password: ""
    })


    const handleChange =(e: any)=>{
        const { name, value } = e.target

        setUser((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e:any)=>{
        e.preventDefault()
        navigate('/notes')
    }

    return(
        <div className="w-full">
             <p className="text-white font-semibold text-2xl">Sign in to your account</p>
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col text-white">
                <label>E-mail</label>
                <input 
                className="border border-black rounded-md text-black"
                onChange={handleChange} type="email" name="email" value={user.email}/>

                <label>Password</label>
                <input 
                className="border border-black rounded-md text-black"
                onChange={handleChange} type="password" name="password" value={user.password}/>
                <button type="submit"
                className="bg-secondaryBlue border border-white rounded-md hover:scale-105 mt-5"
                >Login</button>
            </form>
        </div>
    )
}