import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as BookServices from "../../../../services/BookService"
import * as WishlistServices from "../../../../services/WishlistServices"
import { useSelector } from 'react-redux';
import { selectUserData } from './../../../../redux/reducers/user';
import Swal from 'sweetalert2';
function Details() {
    const { id } = useParams();
    const [apiData, setApiData] = useState({});
    const userData = useSelector(selectUserData);
    const navigate = useNavigate()
    const fetchApiData = async (id) => {
        const [data, error] = await BookServices.getBookByID(id)
        if (data) {
            console.log(data);
            setApiData(data);
        }
        if (error) {
            console.log(error);
        }
    }

    const handleAddToWishlist = async (data) => {
        const addData = {
            userId: userData.user._id,
            payload: data
        }
        const [result, error] = await WishlistServices.addToWishlist(addData)
        if (result) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: result,
                showConfirmButton: false,
                timer: 1500
            })
            navigate("/wishlist");
            console.log(result);
        }
        if (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchApiData(id);
    }, [id])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                        <div
                            className="iq-card-header d-flex justify-content-between align-items-center"
                        >
                            <h4 className="card-title mb-0">Thông tin</h4>
                        </div>
                        <div className="iq-card-body pb-0">
                            <div className="description-contens align-items-top row">
                                <div className="col-md-6">
                                    <div
                                        className="iq-card-transparent iq-card-block iq-card-stretch iq-card-height"
                                    >
                                        <div className="iq-card-body p-0">
                                            <div className="row align-items-center">
                                                <div className="col-12">
                                                    <ul
                                                        id="description-slider"
                                                        className="list-inline p-0 m-0 d-flex align-items-center"
                                                    >
                                                        <li>
                                                            <a href="javascript:void(0);">
                                                                <img
                                                                    src={apiData.image}
                                                                    className="img-fluid w-100 rounded"
                                                                    alt={apiData.title}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div
                                        className="iq-card-transparent iq-card-block iq-card-stretch iq-card-height"
                                    >
                                        <div className="iq-card-body p-0">
                                            <h3 className="mb-3">{apiData.title}</h3>
                                            <div
                                                className="price d-flex align-items-center font-weight-500 mb-2"
                                            >

                                                <span className="font-size-24 text-dark">
                                                    $ {apiData.price}
                                                </span>
                                            </div>

                                            <span
                                                className="text-dark mb-4 pb-4 iq-border-bottom d-block"
                                            >
                                                "{apiData.description}"
                                            </span>
                                            <div className="text-primary mb-4">
                                                Danh Mục: <span className="text-body">{apiData.category?.name}</span>
                                            </div>
                                            <div className="text-primary mb-4">
                                                Tác giả: <span className="text-body"> {apiData.author}</span>
                                            </div>
                                            {/* <div className="mb-4 d-flex align-items-center">
                                                <a
                                                    href="checkout.html"
                                                    className="btn btn-primary view-more mr-2"
                                                >Thêm vào giỏ hàng</a
                                                >
                                                <a
                                                    href="book-pdf.html"
                                                    className="btn btn-primary view-more mr-2"
                                                >Mua ngay</a
                                                >
                                            </div> */}
                                            <div className="mb-3">
                                                <button onClick={() => handleAddToWishlist(apiData)} className="btn text-body text-center">
                                                    <span className="avatar-30 rounded-circle bg-primary d-inline-block mr-2" >
                                                        <i className="ri-heart-fill"></i>
                                                    </span><span>
                                                        Thêm vào danh sách yêu thích
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="iq-social d-flex align-items-center">
                                                <h5 className="mr-2">Chia sẻ:</h5>
                                                <ul
                                                    className="list-inline d-flex p-0 mb-0 align-items-center"
                                                >
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="avatar-40 rounded-circle bg-primary mr-2 facebook"
                                                        ><i
                                                            className="fa fa-facebook"
                                                            aria-hidden="true"
                                                        ></i
                                                            ></a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="avatar-40 rounded-circle bg-primary mr-2 twitter"
                                                        ><i
                                                            className="fa fa-twitter"
                                                            aria-hidden="true"
                                                        ></i
                                                            ></a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="avatar-40 rounded-circle bg-primary mr-2 youtube"
                                                        ><i
                                                            className="fa fa-youtube-play"
                                                            aria-hidden="true"
                                                        ></i
                                                            ></a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="avatar-40 rounded-circle bg-primary pinterest"
                                                        ><i
                                                            className="fa fa-pinterest-p"
                                                            aria-hidden="true"
                                                        ></i
                                                            ></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details