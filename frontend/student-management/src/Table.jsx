import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Model from './Model';
import Edit from './Edit';


const Table = ({ students }) => {
    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>

                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.contactNumber}</td>
                            <td>



                                <button type="button" className="btn btn-warning btn-small" data-bs-toggle="modal" data-bs-target="#EditStudentId">
                                    <i className="bi bi-pencil"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Modal  */}

            <div>
                <Model title="Edit Student" modalId="EditStudentId" body={<Edit />} />
            </div>
        </div>
    )
}

export default Table