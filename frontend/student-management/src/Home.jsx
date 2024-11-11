import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from './Table';
import Add from './Add';
import Model from './Model';

const Home = () => {
    const [students, setStudents] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/getstudents')
            .then(students => setStudents(students.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <nav className="navbar bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand">Student Management</a>
                    <div className="col text-end">
                        <button type="button" className="btn btn-sm btn-outline-light text-light" data-bs-toggle="modal" data-bs-target="#AddStudentId">
                            + New User
                        </button>
                    </div>
                    {/* Modal  */}
                    <div>
                        <Model title="Add Student" modalId="AddStudentId" body={<Add />} />
                    </div>

                </div>
            </nav>
            <div>
                <div className='row mt-5'>
                    <div className="col-10 mx-auto">
                        <Table students={students} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home