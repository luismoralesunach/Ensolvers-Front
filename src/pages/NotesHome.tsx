
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SideBar } from "../components/Sidebar"
import { IoMdMenu } from "react-icons/io";
import { Notes } from "../components/Notes/Notes";
import { NoteCardInterface } from "../components/Notes/NoteCard";
import { AppDispatch } from "../redux/store";
import { fetchLabels } from "../redux/labelsSlice";
import { NoteCard } from "../components/Notes/NoteCard";



export const NotesHome = ()=>{

    const dispatch: AppDispatch = useDispatch()

    const notes = useSelector((state:any)=>state.user.user.notes)
    const user = useSelector((state:any)=>state.user.user)
    const labels = useSelector((state:any)=>state.labels.labels)

    console.log("User in notes home: ", user)
    console.log("Labels", labels)

    const [ noteType, setNoteType ] = useState<string | null>(null)
    const [ isMenuShown, setIsMenuShown ] = useState<boolean>(false)



    const currentNotes = noteType? notes.filter((note: any) =>
        note.labels.some((label: any) => label.name === noteType)
      ): notes;
      

    console.log("Notes: ", notes)
    console.log("Note type: ", noteType)
    console.log("Current notes", currentNotes)

    const toggleMenu = ()=>{
        setIsMenuShown(!isMenuShown)
    }

    useEffect(()=>{
        dispatch(fetchLabels(user.id))
    },[])

    return(
        <div className="flex bg-mainBlack text-white h-[100vh]">
            <div className="w-[20%] border-r border-gray-500 hidden md:block">
                <SideBar labels={labels} setNoteType={setNoteType}/>
            </div>

            <div className="md:hidden mt-5  flex flex-col mx-5 ">
                <button 
                className="text-xl"
                onClick={toggleMenu}>
                <IoMdMenu/>
                </button>
                {isMenuShown && (
                    <div className="border-r border-gray-500 w-[45%] h-full">
                        <SideBar/>
                    </div>
                )
                }
                
            </div>

            <div className="md:w-[80%] w-[55%]">
                <div className="border-b border-gray-500">header here</div>
                <div>
                    {notes &&  currentNotes ? 
                    currentNotes.map((note:NoteCardInterface)=>(
                        <NoteCard note={note}/>
                    )) :
                    notes.map((note:NoteCardInterface)=>(
                        <NoteCard note={note}/>
                    ))
                    }
                    </div>
                
            </div>

            
        </div>
    )
}