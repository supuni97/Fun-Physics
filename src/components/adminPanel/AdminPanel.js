import React, { useEffect, useState } from 'react'
import axois from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const AdminPanel = () => {

  const [columns, setColumns] = useState([])
  const [records, setRecords] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    axois.get('http://localhost:3030/users')
      .then(res => {
        setColumns(Object.keys(res.data[0]))
        setRecords(res.data)
      })
  }, [])

  return (
    <div className='container mt-5'>
    <div>
      <h3 style={{color:'brown', fontSize:'30px', alignItems:'center',fontWeight:'bolder'}}>Welcome Admin</h3>
    </div>
      <table className='table'>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map((d, i) => (
              <tr key={1}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                <Link to={`/admin/update/${d.id}`} className='btn btn-sm btn-success' style={{marginLeft:'10px'}}>Update</Link>
                <button onClick={e=> handleSubmit(d.id)} className='btn btn-sm btn-danger' style={{marginLeft:'10px'}}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className='text-end'>
      <Link to='/admin/create' className='btn btn-primary'>Add New User</Link>
    </div>
    <div className='text-end'>
      <Link to='/' className='btn btn-primary' style={{marginTop:'10px'}}>Back To Home</Link>
    </div>
    </div>
  )

function handleSubmit(id){
  const conf =  window.confirm("Do you want to delete?");
  if(conf){
    axois.delete('http://localhost:3030/users/'+id)
    .then(res =>{
      alert('Record deleted successfully')
      navigate('/admin')
    }).catch(err=> console.log(err));
  }

}

}

export default AdminPanel