import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';


const Table = ({ students, handleDelete }) => {
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
                                <Link to={`/update/${student._id}`} style={{ marginRight: '5px' }} type="button" className="btn btn-warning btn-small">
                                    <i className="bi bi-pencil"></i>
                                </Link>
                                <button className="btn btn-danger btn-small" onClick={(e) => { handleDelete(student._id) }}>
                                    <i className="bi bi-person-x"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Modal  */}

            <div>
                {/* <Model title="Edit Student" modalId="EditStudentId" body={<Edit />} /> */}
            </div>
        </div>
    )
}

export default Table