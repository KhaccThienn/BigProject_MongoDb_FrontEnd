import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as CategoryService from "../../../../services/CategoryService"
import { useSelector } from 'react-redux';
import { selectUserData } from '../../../../redux/reducers/user';
function Sidebar() {
    const [data, setData] = useState([]);
    const userData = useSelector(selectUserData);
    const fetchApiData = async () => {
        const [result, error] = await CategoryService.getAllCategories()
        if (result) {
            console.log(result);
            setData(result);
        }
        if (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchApiData()
    }, [])
    return (
        <div className="iq-sidebar">
            <div className="iq-sidebar-logo d-flex justify-content-between">
                <Link to={"/"} className="header-logo">
                    <img src="images/logo.png" className="img-fluid rounded-normal" alt="" />
                    <div className="logo-title">
                        <span className="text-primary text-uppercase">BOOKSTORE</span>
                    </div>
                </Link>
            </div>
            <div id="sidebar-scrollbar">
                <nav className="iq-sidebar-menu">
                    <ul id="iq-sidebar-toggle" className="iq-menu">
                        <li className="active active-menu">
                            <Link to={"/"} href="#dashboard" className="iq-waves-effect" data-toggle="collapse" aria-expanded="true"><span
                                className="ripple rippleEffect"></span><i className="las la-home iq-arrow-left"></i><span>Trang
                                    Chủ</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></Link>
                            <ul id="dashboard" className="iq-submenu collapse show" data-parent="#iq-sidebar-toggle">
                            </ul>
                        </li>
                        <li>
                            <a href="#ui-elements" className="iq-waves-effect collapsed" data-toggle="collapse"
                                aria-expanded="false"><i className="lab la-elementor iq-arrow-left"></i><span>Danh mục sản
                                    phẩm</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                            <ul id="ui-elements" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                {
                                    data && data.map((e, i) => {
                                        return (
                                            <li className="elements" key={i}>
                                                <Link to={`/category/${e._id}`} className="iq-waves-effect collapsed" data-toggle="collapse"
                                                    aria-expanded="false">
                                                    <i className="ri-play-circle-line"></i>
                                                    <span>{e.name}</span>
                                                    <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </li>
                        {
                            (userData.user.role_id === 0) && (
                                <li><Link to={"/wishlist"} ><i className="ri-book-line"></i>Yêu Thích</Link></li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar