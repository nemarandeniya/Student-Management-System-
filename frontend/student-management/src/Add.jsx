import axios from 'axios';
import React, { useState } from 'react'

const Add = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        contactNumber: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/addstudents', formData)
            console.log(response.data);
            alert("Student added successfully!")
            // Reset form after successful submission
            setFormData({
                id: '',
                name: '',
                email: '',
                contactNumber: ''
            })
        } catch (error) {
            console.error("Error adding student:", error);
            alert("Failed to add student.");
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="id" className='form-label'>Id</label>
                    </div>
                    <div className="col-8">
                        <input type="number" className="form-control" id="id" name="id" onChange={handleChange} value={formData.id} placeholder="Id"
                            required />
                    </div>
                </div><br />
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="Name">Name</label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={handleChange} value={formData.name}
                            required />
                    </div>
                </div><br />
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control" id="email" name="email" placeholder="Email" required onChange={handleChange} value={formData.email} />
                    </div>
                </div><br />
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="contactNumber">Contact number</label>
                    </div>
                    <div className="col-8">
                        <input type="number" className="form-control" id="contactNumber" name="contactNumber" placeholder="Age" onChange={handleChange} value={formData.contactNumber}
                            required />
                    </div>
                </div><br />
                <div className="row">
                    <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Add