import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as BookServices from "../../../../services/BookService"
import * as UserService from "../../../../services/UserService"
import { useSelector } from 'react-redux'
import { selectUserData } from '../../../../redux/reducers/user'
function Home() {
    const initUserData = {
        createdAt: "",
        email: "",
        profileImg: "",
        role_id: 0,
        updatedAt: "",
        username: "",
        wishList: [],
        __v: "",
        _id: ""
    }
    const [apiData, setApiData] = useState([])
    const userData = useSelector(selectUserData);
    const [user, setUser] = useState(initUserData)

    const fetchApiData = async () => {
        const [data, err] = await BookServices.getAllAndLimit();
        if (data) {
            console.log(data);
            setApiData(data);
        }
        if (err) {
            console.log(err);
        }
    }

    const fetchUserData = async (id) => {
        const [data, err] = await UserService.getOneUser(id);
        if (data) {
            console.log(data);
            setUser(data);
        }
        if (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchApiData()
        userData.user._id && fetchUserData(userData.user._id)
    }, [userData.user._id])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                        <div className="iq-card-header d-flex justify-content-between align-items-center position-relative">
                            <div className="iq-header-title">
                                <h4 className="card-title mb-0">Gợi ý cho bạn</h4>
                            </div>
                            <div className="iq-card-header-toolbar d-flex align-items-center">
                                <Link to={"/shop"} className="btn btn-sm btn-primary view-more">Xem Thêm</Link>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <div className="row">
                                {
                                    apiData && apiData.map((e, i) => {
                                        return (
                                            <div className="col-sm-6 col-md-4 col-lg-3" key={i}>
                                                <div className="iq-card iq-card-block iq-card-stretch iq-card-height browse-bookcontent">
                                                    <div className="iq-card-body p-0">
                                                        <div className="d-flex align-items-center">
                                                            <div className="col-6 p-0 position-relative image-overlap-shadow">
                                                                <a href="#">
                                                                    <img
                                                                        className="img-fluid rounded w-100"
                                                                        src={e.image} alt={e.title}
                                                                    />
                                                                </a>
                                                                <div className="view-book">
                                                                    <Link to={`/details/${e._id}`} className="btn btn-sm btn-white">Đọc Ngay</Link>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="mb-2">
                                                                    <h6 className="mb-1">{e.title}</h6>
                                                                    <p className="font-size-13 line-height mb-1">Author: {e.author}</p>
                                                                    <p className="font-size-13 line-height mb-1">{e.category.name}</p>
                                                                </div>
                                                                <div className="price d-flex align-items-center">
                                                                    <h6><b>$ {e.price}</b></h6>
                                                                </div>
                                                                {/* <div className="iq-product-action">
                                                                    <a href="#" className="ml-2"><i
                                                                        className="ri-heart-fill text-danger"></i></a>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>
                    </div>
                </div>
                {
                    (userData.user.role_id === 0) && (
                        <div className="col-lg-12">
                            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                <div className="iq-card-header d-flex justify-content-between align-items-center position-relative">
                                    <div className="iq-header-title">
                                        <h4 className="card-title mb-0">Sách yêu thích</h4>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <Link to={"/wishlist"} className="btn btn-sm btn-primary view-more">Xem thêm</Link>
                                    </div>
                                </div>
                                <div className="iq-card-body favorites-contens">
                                    <ul id="favorites-slider" className="list-inline p-0 mb-0 row">
                                        {
                                            (user.wishList.length > 0) ? user.wishList.map((e, i) => {
                                                return (
                                                    <li className="col-md-4" key={i}>
                                                        <div className="d-flex align-items-center">
                                                            <div className="col-5 p-0 position-relative">
                                                                <a href="#">
                                                                    <img src={e.image} className="img-fluid rounded w-100" alt={e.title} />
                                                                </a>
                                                            </div>
                                                            <div className="col-7">
                                                                <h5 className="mb-2">{e.title}</h5>
                                                                <p className="mb-2">Tác giả : {e.author}</p>
                                                                <Link to={`/details/${e._id}`} className="text-dark">Đọc ngay<i className="ri-arrow-right-s-line"></i></Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }) : <div className='ml-4'>Chưa có sách nào trong mục yêu thích của bạn.</div>
                                        }


                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default Home