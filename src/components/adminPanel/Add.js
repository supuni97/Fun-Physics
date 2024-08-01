import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Add() {

const [inuputData,setInputData]= useState({name:'',email:''})
const navigate = useNavigate();

function handleSubmit(event){
event.preventDefault()

axios.post('http://localhost:3030/users',inuputData)
.then(res=>{
    alert("User Added Successfully");
    navigate('/admin');
}).catch(err=> console.log(err));

}
    return (
        <div>
            <form onSubmit={handleSubmit} className='' style={{ width: '100%' }}>
                <div className='form-group' style={{ marginBottom: '15px' }}>
                    <label style={{ width: '100%', padding: '10px', marginBottom: '10px' }}>
                    Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        required
                        onChange={e=> setInputData({...inuputData,name:e.target.value})}
                        style={{ width: '50%', padding: '10px', marginBottom: '10px' }}
                    />
                </div>
                <div className='form-group' style={{ marginBottom: '15px' }}>
                    <label style={{ width: '100%', padding: '10px', marginBottom: '10px' }}>
                    Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        required
                        onChange={e=> setInputData({...inuputData,email:e.target.value})}
                        style={{ width: '50%', padding: '10px', marginBottom: '10px' }}
                    />
                </div>

                <button type='submit' className='btn btn-custom btn-lg' style={{ width: '30%', padding: '10px', backgroundColor: '#291F7B', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Add User
                </button>
            </form>
        </div>
    )
}

export default Add