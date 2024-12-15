import { FaArchive } from "react-icons/fa";
import { useSelector } from "react-redux";

export interface Label {
    id: number,
    name: string
}
interface SideBarProps{
    setNoteType: (arg:string | null)=>void,
    labels: Label[]
}

export const SideBar: React.FC<SideBarProps> = ({setNoteType, labels})=>{


    const user = useSelector((state:any)=>state.user.user)
    
    






    return(
        <div className="md:h-[85%] w-full h-[75%]">
            <div className="md:mx-5 md:mt-5">
                <p className="hidden md:block">{user.name}'s Notes</p>
            </div>

            <div className="h-[80%] md:mx-5 w-full flex flex-col justify-between mt-10">
                <ul className="flex flex-col gap-2 ">
                   
                    <li 
                    onClick={()=>setNoteType(null)}
                    className="hover:cursor-pointer" key={"All"}>All</li>
                    {labels.map((label)=>(
                    <li 
                    onClick={()=>setNoteType(label.name)}
                    className="hover:cursor-pointer" key={label.name}>{label.name}</li>
                    ))}
                </ul>

                <button 
                onClick={()=>setNoteType("archive")}
                className="w-full  self-start hover:scale-105 flex items-center gap-2">Archived<FaArchive /></button>
            </div>


        </div>
    )
}