import React, { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function Create() {
    const [values, setValues] = useState({
        name: '',
        description: '',
        priority: '',
        status: ''
    })

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        axios.post('/add_user', values)
        .then((res)=>{
            
            navigate('/')
            console.log(res)
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div className='container vh-100 vw-100 bg-primary'>
        <div className='row'>
            <h3>Add Tasks</h3>
            <div className='d-flex justify-content-end'>
                <Link to='/' class='btn btn-success'>Home</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group my-3'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' required onChange={(e)=> setValues({...values, name: e.target.value})} />
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='description'>Description</label>
                    <input type='text' name='description' required onChange={(e)=> setValues({...values, description: e.target.value})} />
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='status'>Status</label>
                    <input type='text' name='status' required onChange={(e)=> setValues({...values, status: e.target.value})} />
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='priority'>Priority</label>
                    <input type='number' name='priority' required onChange={(e)=> setValues({...values, priority: e.target.value})} />
                </div>
                <div className='form-group my-3'>
                    <button type='submit' className='btn btn-success'>Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Create