import { useContext } from "react"

import { myContext } from "../services/MyContextComponent"
import AddUser from "../components/AddUser"
import UserList from "../components/UsersList"

function Users () {

    const { data } = useContext(myContext)

    return (
        <>
            <h2>Vista de usuarios</h2>
            <AddUser/>
            <h3>Users</h3>
            <UserList users={data.states.users}/>
        </>
    )
}

export default Users