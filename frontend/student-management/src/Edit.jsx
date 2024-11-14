import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
    const { id } = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5000/getStudent/' + id)
            .then(response => {
                console.log(response)
                setName(response.data.name)
                setEmail(response.data.email)
                setContactNumber(response.data.contactNumber)
            })
            .catch(err => console.log(err))
    }, [])

    const update = (e) => {
        e.preventDefault();
        axios.put('http://localhost:5000/updatestudent/' + id, { name, email, contactNumber })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err)
            )
    }
    return (
        <>
            <nav className="navbar bg-secondary ">
                <div className="container-fluid">
                    <a className="navbar-brand">Student Management</a>
                </div>
            </nav>
            <div className="row mt-5" >
                <div className="col-2"></div>
                <div className="col-8 border rounded">
                    <form onSubmit={update}>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="Name">Name</label>
                            </div>
                            <div className="col-8">
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" name="name" placeholder="Name"
                                    required />
                            </div>
                        </div><br />
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="col-8">
                                <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder="Email" required />
                            </div>
                        </div><br />
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="contactNumber">Contact number</label>
                            </div>
                            <div className="col-8">
                                <input type="number" className="form-control" onChange={(e) => setContactNumber(e.target.value)} value={contactNumber} id="contactNumber" name="contactNumber" placeholder="Contact number"
                                    required />
                            </div>
                        </div><br />
                        <div className="row">
                            <button type="submit" className="btn btn-secondary" >Update</button>
                        </div>
                    </form></div>
                <div className="col-2"></div>
            </div>
        </>
    )
}

export default Edit