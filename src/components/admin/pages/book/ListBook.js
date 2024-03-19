/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as BookServices from "../../../../services/BookService";
import Swal from 'sweetalert2';

function ListBook() {
    const [deleteState, setDeleteState] = useState(false);
    const [apiData, setApiData] = useState([])
    const fetchApiData = async () => {
        const [data, err] = await BookServices.getAll();
        if (data) {
            console.log(data);
            setApiData(data)
        }
        if (err) {
            console.log(err);
        }

    }
    const handleDelete = async (id) => {
        console.log(id);
        const result = await Swal.fire({
            title: "Delete this ?",
            showCancelButton: true,
            confirmButtonText: "Delete",
        })

        if (result.isConfirmed) {
            const [res, err] = await BookServices.deleteBook(id);
            if (res) {
                setDeleteState(!deleteState)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Deleted",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            if (err) {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Delete failed",
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        }
    }

    useEffect(() => {
        fetchApiData()
    }, [deleteState])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Danh sách sách</h4>
                            </div>
                            <div className="iq-card-header-toolbar d-flex align-items-center">
                                <Link to={"/book/add"} className="btn btn-primary"
                                >Thêm sách</Link>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <div className="table-responsive">
                                <table className="data-tables table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "10%" }}>Id</th>
                                            <th style={{ width: "12%" }}>Hình ảnh</th>
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
                                            apiData && apiData.map((e, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>{e._id}</td>
                                                        <td>
                                                            <img
                                                                className="img-fluid rounded"
                                                                src={e.image}
                                                                alt={e.title}
                                                            />
                                                        </td>
                                                        <td>{e.title}</td>
                                                        <td>{e.category?.name}</td>
                                                        <td>{e.author}</td>
                                                        <td>
                                                            <p className="mb-0">
                                                                {e.description}
                                                            </p>
                                                        </td>
                                                        <td>${e.price}</td>
                                                        <td>
                                                            <div className="flex align-items-center list-user-action">
                                                                <Link to={`/book/update/${e._id}`} className="bg-primary" data-toggle="tooltip" data-placement="top" title="Sửa">
                                                                    <i className="ri-pencil-line"></i>
                                                                </Link>
                                                                <button onClick={() => handleDelete(e._id)} className="btn btn-sm text-center bg-primary" data-toggle="tooltip" data-placement="top" title="Xóa">
                                                                    <i className="ri-delete-bin-line"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
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

export default ListBook