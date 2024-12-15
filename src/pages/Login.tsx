import { useState } from "react"
import { LoginComponent } from "../components/LoginComponent"
import { RegisterComponent } from "../components/RegisterComponent"



export const Login = ()=>{

    const [ isLoginShowing, setIsLoginShowing ] = useState<boolean>(true)

    return(
        <div 
        className="h-[100vh] bg-gradient-to-t from-black to-primaryBlue flex flex-col justify-center items-center"
      >
            <div className="md:w-[20%] w-[75%]">
                {isLoginShowing ? <LoginComponent/> : <RegisterComponent/>}
            </div>

            <button
                className="my-10 text-sm text-white hover:scale-110"
                onClick={() => setIsLoginShowing(!isLoginShowing)}
                >
                {isLoginShowing ? (
                    <>
                    No account? <span className="text-secondaryBlue hover:scale-110">Register</span>
                    </>
                ) : (
                    <>
                    Have an account? <span className="text-secondaryBlue">Login</span>
                    </>
                )}
                </button>


        </div>
    )
}