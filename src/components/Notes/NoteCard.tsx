import { Label } from "../Sidebar"

export interface NoteCardInterface {
    labels: Label[]
    title: string
    text: string
    id:number;
    active: boolean
}

interface NoteCardProps{
    note: NoteCardInterface
}

export const NoteCard:React.FC<NoteCardProps> = ({note})=>{

    return(
        <div>
            <div>
                <h1>{note.title}</h1>
                <p>{note.text}</p>

            </div>
        </div>
    )
}