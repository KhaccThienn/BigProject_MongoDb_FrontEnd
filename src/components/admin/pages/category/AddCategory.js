import React, { useState } from 'react'
import * as CategoryService from "../../../../services/CategoryService";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
function AddCategory() {
    const initState = {
        name: "",
        description: ""
    }

    const [postData, setPostData] = useState(initState);
    const navigate = useNavigate();

    const handleChangeValue = async (e) => {
        const { name, value } = await e.target;
        setPostData({ ...postData, [name]: value });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const [result, error] = await CategoryService.createCategory(postData);
        if (result) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Added Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            navigate("/category");
        }
        if (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Add Failed',
                showConfirmButton: false,
                timer: 1500
            })
            console.log(error);
        }
    };
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
                                    <input type="text" className="form-control" name='name' onChange={(e) => handleChangeValue(e)} />
                                </div>
                                <div className="form-group">
                                    <label>Nội dung:</label>
                                    <textarea className="form-control" rows="4" name='description' onChange={(e) => handleChangeValue(e)}></textarea>
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

export default AddCategory