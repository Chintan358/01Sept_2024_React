
const UserData = ({ users, updateUser }) => {

    const deleteUser = (id) => {

        fetch(`http://localhost:3000/users/${id}`, {
            method: "delete"
        })

    }
    return <tr>
        <td>{users.id}</td>
        <td>{users.username}</td>
        <td>{users.email}</td>
        <td>{users.phone}</td>
        <td><button className="btn btn-danger" onClick={() => deleteUser(users.id)}>Delete</button></td>
        <td><button className="btn btn-primary" onClick={() => updateUser(users.id)} >Update</button> </td>
    </tr>
}

export default UserData