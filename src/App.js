import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import { Table } from "react-bootstrap"

function App() {
    const [user, setUser] = useState([])
    useEffect(() => {
        getUSers()

    }, [])
    let getUSers = async () => {
        let data = await fetch("https://gorest.co.in/public/v2/users");
        data = await data.json()
        console.log(data)
        setUser(data)
    }
    let male = user.filter((item)=> item.gender=="male")
    console.log(male)
    let female = user.filter((item)=> item.gender=="female")
    console.log(female)
    
    return (
        <>
            <h1 className='userList'>User List</h1>
            <h4>Male Count :{male.length}</h4>
            <h4>Female Count :{female.length}</h4>
            <Table striped>
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Gender</td>
                        <td>Status</td>
                    </tr>
                    {user.map((element, i) =>
                        <tr key={i}>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.email}</td>
                            <td>{element.gender}</td>
                            <td>{element.status}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    )
}

export default App
