import React, { useEffect, useState } from 'react'
import * as CategoryService from "../../../../services/CategoryService";
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom'

function UpdateCategory() {
    const { id } = useParams();
    const initData = {
        name: "",
        description: ""
    }
    const initState = {
        name: "",
        description: ""
    }
    const [apiData, setApiData] = useState(initData);
    const [postData, setPostData] = useState(initState);
    const navigate = useNavigate();

    const fetchApiData = async (id) => {
        const [result, error] = await CategoryService.getCategoryByID(id)
        if (result) {
            console.log(result);
            setApiData(result);
        }
        if (error) {
            console.log(error);
        }
    }

    const handleChangeValue = async (e) => {
        const { name, value } = await e.target;
        setPostData({ ...postData, [name]: value });
    };

    const handleSubmitForm = async (e) => {
        const newData = {
            name: postData.name ? postData.name : apiData.name,
            description: postData.description ? postData.description : apiData.description,
        }
        e.preventDefault();
        const [result, error] = await CategoryService.updateCategory(id, newData);
        if (result) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Updated Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            navigate("/category");
        }
        if (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Updat Failed',
                showConfirmButton: false,
                timer: 1500
            })
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApiData(id)
    }, [id])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Thêm danh mục</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <form method='post' onSubmit={(e) => handleSubmitForm(e)}>
                                <div className="form-group">
                                    <label>Tên danh mục:</label>
                                    <input type="text" className="form-control" name='name' defaultValue={apiData.name} onChange={(e) => handleChangeValue(e)} />
                                </div>
                                <div className="form-group">
                                    <label>Nội dung:</label>
                                    <textarea className="form-control" rows="4" name='description' defaultValue={apiData.description} onChange={(e) => handleChangeValue(e)}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Gửi</button>
                                <button type="reset" className="btn btn-danger">Trở lại</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateCategory