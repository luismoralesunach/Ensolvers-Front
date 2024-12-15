
import { useState } from "react";
import { SideBar } from "../components/Sidebar"
import { IoMdMenu } from "react-icons/io";


export const NotesHome = ()=>{

    const [ isMenuShown, setIsMenuShown ] = useState<boolean>(false)

    const toggleMenu = ()=>{
        setIsMenuShown(!isMenuShown)
    }

    return(
        <div className="flex bg-mainBlack text-white h-[100vh]">
            <div className="w-[20%] border-r border-gray-500 hidden md:block">
                <SideBar/>
            </div>

            <div className="md:hidden mt-5 w-[45%] flex flex-col mx-5 ">
                <button 
                className="text-xl"
                onClick={toggleMenu}>
                <IoMdMenu/>
                </button>
                {isMenuShown && (
                    <div className="border-r border-gray-500 w-full h-full">
                        <SideBar/>
                    </div>
                )
                }
                
            </div>

            <div>

            </div>
        </div>
    )
}