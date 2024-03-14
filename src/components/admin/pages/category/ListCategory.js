/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as CategoryService from "../../../../services/CategoryService";
import Swal from 'sweetalert2';
function ListCategory() {
    const [data, setData] = useState([]);
    const [deleteState, setDeleteState] = useState(false);

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

    const handleDelete = async (id) => {
        console.log(id);
        const result = await Swal.fire({
            title: "Delete this ?",
            showCancelButton: true,
            confirmButtonText: "Delete",
        })

        if (result.isConfirmed) {
            const [res, err] = await CategoryService.deleteCategory(id);
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
                                <h4 className="card-title">Danh sách danh mục</h4>
                            </div>

                            <div className="iq-card-header-toolbar d-flex align-items-center">
                                <Link to={"/category/add"} className="btn btn-primary">Thêm danh mục mới</Link>
                            </div>
                        </div>

                        <div className="iq-card-body">
                            <div className="table-responsive">
                                <table className="data-tables table table-striped table-bordered" style={{ width: "100%" }}>
                                    <thead>
                                        <tr>
                                            <th width="5%">ID</th>
                                            <th width="20%">Tên danh mục</th>
                                            <th width="65%">Mô tả danh mục</th>
                                            <th width="10%">Hoạt động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data && data.map((e, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>{e._id}</td>
                                                        <td>{e.name}</td>
                                                        <td>
                                                            <p className="mb-0">{e.description}</p>
                                                        </td>
                                                        <td>
                                                            <div className="flex align-items-center list-user-action">
                                                                <Link to={`/category/update/${e._id}`} className="bg-primary" data-toggle="tooltip" data-placement="top" title="Sửa">
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

export default ListCategory