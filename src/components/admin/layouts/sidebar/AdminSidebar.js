import React from 'react'
import { Link } from "react-router-dom"
function AdminSidebar() {
    return (
        <div className="iq-sidebar">
            <div className="iq-sidebar-logo d-flex justify-content-between">
                <Link to={"/"} className="header-logo">
                    <img src="images/logo.png" className="img-fluid rounded-normal" alt="" />
                    <div className="logo-title">
                        <span className="text-primary text-uppercase">BookStore Admin</span>
                    </div>
                </Link>
                <div className="iq-menu-bt-sidebar">
                    <div className="iq-menu-bt align-self-center">
                        <div className="wrapper-menu">
                            <div className="main-circle"><i className="las la-bars"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sidebar-scrollbar">
                <nav className="iq-sidebar-menu">
                    <ul id="iq-sidebar-toggle" className="iq-menu">
                        <li><Link to={"/"}><i className="las la-home iq-arrow-left"></i>Bảng Điều Khiển</Link></li>
                        <li><Link to={"/category"}><i className="ri-record-circle-line"></i>Danh Mục Sách</Link></li>
                        <li><Link to={"/book"}><i className="ri-record-circle-line"></i>Sách</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default AdminSidebar