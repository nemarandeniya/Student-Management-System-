import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Model = ({ title, body, modalId }) => {
    return (
        <>
            <div className="modal fade" id={modalId} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`${modalId}Label`} >{title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {body}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Model