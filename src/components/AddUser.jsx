import { useState, useContext } from "react"

import { myContext } from "../services/MyContextComponent"

function AddUser () {

    const { data } = useContext(myContext)
    const [newUser, setNewUser] = useState("")

    return (
        <>
            <input
                type="text"
                placeholder="Añade un usuario..."
                value={newUser}
                onChange={(ev)=>{setNewUser(ev.target.value)}}
            />
            <button onClick={()=>{data.actions.addUser(newUser)}}>
                Añadir
            </button>
        </>
    )
}

export default AddUser