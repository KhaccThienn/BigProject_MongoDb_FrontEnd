import React, { useEffect, useState } from 'react'
import * as WishlistServices from "../../../../services/WishlistServices"
import * as UserService from "../../../../services/UserService"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { selectUserData } from '../../../../redux/reducers/user';
import Swal from 'sweetalert2';

function Wishlist() {
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
    const userData = useSelector(selectUserData);
    const [user, setUser] = useState(initUserData)
    const [reload, setReload] = useState(false);

    const handleDelete = async (id) => {
        const isConfirm = await Swal.fire({
            title: "Delete this ?",
            showCancelButton: true,
            confirmButtonText: "Delete",
        })

        if (isConfirm.isConfirmed) {
            const payloadDataa = {
                userId: userData.user._id,
                payload: id
            }
            const [result, error] = await WishlistServices.removeFromWishlist(payloadDataa)
            if (result) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: result,
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(result);
                setReload(!reload);
            }
            if (error) {
                console.log(error);
            }
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
        fetchUserData(userData.user._id)
    }, [userData.user._id, reload])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Danh sách sách yêu thích</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <div className="table-responsive">
                                <table className="data-tables table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "22%" }}>Hình ảnh</th>
                                            <th style={{ width: "15%" }}>Tên sách</th>
                                            <th style={{ width: "15%" }}>Thể loại sách</th>
                                            <th style={{ width: "15%" }}>Tác giả sách</th>
                                            <th style={{ width: "18%" }}>Mô tả sách</th>
                                            <th style={{ width: "7%" }}>Giá</th>
                                            <th style={{ width: "15%" }}>Hoạt động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            user.wishList.length > 0 ? user.wishList.map((e, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>
                                                            <img
                                                                className="img-fluid rounded"
                                                                src={e.image}
                                                                alt={e.title}
                                                            />
                                                        </td>
                                                        <td>{e.title}</td>
                                                        <td>{e.category.name}</td>
                                                        <td>{e.author}</td>
                                                        <td>
                                                            <p className="mb-0">
                                                                {e.description}
                                                            </p>
                                                        </td>
                                                        <td>${e.price}</td>
                                                        <td>
                                                            <div className="flex align-items-center list-user-action">
                                                                <button onClick={() => handleDelete(e._id)} className="btn btn-sm text-center bg-primary" data-toggle="tooltip" data-placement="top" title="Xóa">
                                                                    <i className="ri-delete-bin-line"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            }) :
                                                <tr>
                                                    <td colSpan={8} className='text-center'>Danh sách hiện đang trống, hãy thêm mới !</td>
                                                </tr>
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist