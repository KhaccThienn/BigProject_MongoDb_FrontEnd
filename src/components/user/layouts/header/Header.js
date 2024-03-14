import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import user, { clearUser, selectUserData } from '../../../../redux/reducers/user'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Header() {
    const userData = useSelector(selectUserData);
    console.log(userData.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        const choose = await Swal.fire({
            title: "Do You Want To Log Out ?",
            showDenyButton: true,
            confirmButtonText: "Yes",
            denyButtonText: "No",
        });
        if (choose.isConfirmed) {
            dispatch(clearUser());
            navigate('/');
            Swal.fire({
                title: "You Logged Out Successfully",
                icon: 'success',
                timer: 1500,
                timerProgressBar: true,
                position: 'top-right'
            })
        }
    }
    return (
        <div className="iq-top-navbar">
            <div className="iq-navbar-custom">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <div className="iq-menu-bt d-flex align-items-center">
                        <div className="wrapper-menu">
                            <div className="main-circle"><i className="las la-bars"></i></div>
                        </div>
                        <div className="iq-navbar-logo d-flex justify-content-between">
                            <a href="index.html" className="header-logo">
                                <img src="images/logo.png" className="img-fluid rounded-normal" alt="" />
                                <div className="logo-title">
                                    <span className="text-primary text-uppercase">img01</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="navbar-breadcrumb">
                        <h5 className="mb-0">Trang Chủ</h5>
                    </div>
                    <div className="iq-search-bar">
                        <form action="#" className="searchbox">
                            <input type="text" className="text search-input" placeholder="Tìm kiếm sản phẩm..." />
                            <a className="search-link" href="#"><i className="ri-search-line"></i></a>
                        </form>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                        <i className="ri-menu-3-line"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto navbar-list">
                            {
                                !userData.user._id && (<li className="line-height pt-3">
                                    <a href="#" className="search-toggle iq-waves-effect d-flex align-items-center">
                                        <div className="caption">
                                            <p className="mb-0 text-primary">Tài Khoản</p>
                                        </div>
                                    </a>
                                    <div className="iq-sub-dropdown iq-user-dropdown">
                                        <div className="iq-card shadow-none m-0">
                                            <div className="iq-card-body p-0 ">
                                                <div className="bg-primary p-3">
                                                    <h5 className="mb-0 text-white line-height">Xin Chào Bạn</h5>
                                                </div>
                                                <Link to={"/login"} className="iq-sub-card iq-bg-primary-hover">
                                                    <div className="media align-items-center">
                                                        <div className="rounded iq-card-icon iq-bg-primary">
                                                            <i className="ri-login-box-line"></i>
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Đăng Nhập</h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to={"/register"} className="iq-sub-card iq-bg-primary-hover">
                                                    <div className="media align-items-center">
                                                        <div className="rounded iq-card-icon iq-bg-primary">
                                                            <i className="ri-user-add-line"></i>
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Đăng Ký</h6>
                                                        </div>
                                                    </div>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </li>)
                            }
                            {
                                (userData.user._id) && (
                                    <li className="line-height pt-3">
                                        <a href="#" className="search-toggle iq-waves-effect d-flex align-items-center">
                                            <img src={userData.user.profileImg} className="img-fluid rounded-circle mr-3" alt="user" />
                                            <div className="caption">
                                                <h6 className="mb-1 line-height">{userData.user.username}</h6>
                                                <p className="mb-0 text-primary">Tài Khoản</p>
                                            </div>
                                        </a>
                                        <div className="iq-sub-dropdown iq-user-dropdown">
                                            <div className="iq-card shadow-none m-0">
                                                <div className="iq-card-body p-0 ">
                                                    <div className="bg-primary p-3">
                                                        <h5 className="mb-0 text-white line-height">Xin Chào {userData.user.username}</h5>
                                                    </div>
                                                    <Link to={"/wishlist"} className="iq-sub-card iq-bg-primary-hover">
                                                        <div className="media align-items-center">
                                                            <div className="rounded iq-card-icon iq-bg-primary">
                                                                <i className="ri-heart-line"></i>
                                                            </div>
                                                            <div className="media-body ml-3">
                                                                <h6 className="mb-0 ">Yêu Thích</h6>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="d-inline-block w-100 text-center p-3">
                                                        <button className="btn bg-primary iq-sign-btn" role="button" onClick={() => handleLogout()}>Sign out<i
                                                            className="ri-logout-box-line ml-2"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Header