import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';



function Home() { // Componente  Home
    const [data, setData] = useState([]) 
    const [deleted, setDeleted] = useState(true)
  
    useEffect(()=>{
        if(deleted){
            setDeleted(false)
        axios.get('/students')
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>console.log(err))
    }
    }, [deleted])

    function handleDelete(id){
        axios.delete(`/delete/${id}`)
        .then((res)=>{
            setDeleted(true)
        })
        .catch((err)=> console.log(err))
    }


  return (
    <div className='container-fluid bg-primary vh-100 vw-100'> 
        <h3>Tasks</h3>
        

        <div className='d-flex justify-content-end'>
                <Link className='btn btn-success' to='/examples'>Go to Examples</Link>
            </div>
        <br></br>

        <div className='d-flex justify-content-end'>
                <Link className='btn btn-success' to='/tictactoe'>Go to Tic Tac Toe</Link>
            </div>
        <br></br>

        <div className='d-flex justify-content-end'>
            <Link className='btn btn-success' to='/create'>Add Tasks</Link>
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((student)=>{
                        return (<tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.description}</td>
                            <td>{student.priority}</td>
                            <td>{student.status}</td>
                            <td>
                                <Link className='btn mx-2 btn-success' to={`/read/${student.id}`}>Read</Link>
                                <Link className='btn mx-2 btn-success' to={`/edit/${student.id}`}>Edit</Link>
                                <button onClick={()=>handleDelete(student.id)} className='btn mx-2 btn-danger'>Delete</button>
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Home