import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
const {id} =  useParams();
const [data,setData]= useState([]);
const navigate = useNavigate();

useEffect(()=>{
axios.get('http://localhost:3030/users/'+id)
.then(res=> setData(res.data))
.catch(err=>console.log(err))
},[])

function handleSubmit(event){
    event.preventDefault()
    
    axios.put('http://localhost:3030/users/'+id,data)
    .then(res=>{
        alert("User Updated Successfully");
        navigate('/admin');
    }).catch(err=> console.log(err));
    
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='' style={{ width: '100%' }}>
            <div className='form-group' style={{ marginBottom: '15px' }}>
                    <label style={{ width: '100%', padding: '10px', marginBottom: '10px' }}>
                    Id:</label>
                    <input
                        type='text'
                        id='id'
                        name='id'
                        className='form-control'
                        disabled
                        value={data.id}
                        style={{ width: '50%', padding: '10px', marginBottom: '10px' }}
                    />
                </div>
                <div className='form-group' style={{ marginBottom: '15px' }}>
                    <label style={{ width: '100%', padding: '10px', marginBottom: '10px' }}>
                    Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        value={data.name}
                        onChange={e=>setData({...data,name:e.target.value})}
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
                        value={data.email}
                        onChange={e=>setData({...data,email:e.target.value})}
                        style={{ width: '50%', padding: '10px', marginBottom: '10px' }}
                    />
                </div>

                <button type='submit' className='btn btn-custom btn-lg' style={{ width: '30%', padding: '10px', backgroundColor: '#291F7B', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Update User
                </button>
            </form>
        </div>
    )
}

export default Edit