
import { placeholder } from "@babel/types"
import React, {useState} from "react"
import { UsageState } from "webpack"
import { notesRef } from "./firebase"

function CreateNote(){
    const [note, setNote] = useState("")

    return (
        <form onSubmit = {createNote}>
            <input type = "text" value = {note} onChange={(e) => setNote(e.target.value)} placeholder = "Create a Note"/>
        </form>

    )
}



export default CreateNote