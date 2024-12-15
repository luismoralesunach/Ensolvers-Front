import { FaArchive } from "react-icons/fa";

export const SideBar = ()=>{

    const user = {
        name: "Luis"
    }

    const lables = [
        "Homework",
        "All",
        "Assignments",
        "Important",
    ]


    return(
        <div className="md:h-[85%] h-[75%]">
            <div className="md:mx-5 md:mt-5">
                <p className="hidden md:block">{user.name}'s Notes</p>
            </div>

            <div className="h-[80%] md:mx-5 w-full flex flex-col justify-between mt-10">
                <ul className="flex flex-col gap-2 ">
                    {lables.map((label)=>(
                        <li className="hover:cursor-pointer" key={label}>{label}</li>
                    ))}
                </ul>

                <button className="w-full  self-start hover:scale-105 flex items-center gap-2">Archived<FaArchive /></button>
            </div>


        </div>
    )
}