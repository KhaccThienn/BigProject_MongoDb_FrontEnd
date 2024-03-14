import React from 'react'
import { Link } from 'react-router-dom'

function AdminFooter() {
    return (
        <footer className="iq-footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item"><Link to={"#"}>Chính sách</Link></li>
                            <li className="list-inline-item"><Link to={"#"}>Điều khoản</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default AdminFooter