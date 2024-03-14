import React, { useEffect, useState } from 'react'
import * as CategoryService from "../../../../services/CategoryService";
import * as BookServices from "../../../../services/BookService";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


function AddBook() {
    const initData = {
        title: "",
        author: "",
        image: {},
        price: "",
        description: "",
        category: ""
    }
    const [categories, setCategories] = useState([])
    const [postData, setPostData] = useState(initData);
    const [postImage, setPostImage] = useState();
    const navigate = useNavigate();

    const handleChangeValue = (e) => {
        const { name, value } = e.target;
        setPostData({ ...postData, [name]: value });
    };

    const handleChangeFile = (e) => {
        // console.log(e.target.files[0]);
        setPostImage(e.target.files[0]);
    };

    const fetchApiData = async () => {
        const [result, error] = await CategoryService.getAllCategories()
        if (result) {
            console.log(result);
            setCategories(result);
        }
        if (error) {
            console.log(error);
        }
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", postData.title);
        formData.append("category", postData.category);
        formData.append("author", postData.author);
        formData.append("image", postImage);
        formData.append("price", postData.price);
        formData.append("description", postData.description);

        const [result, error] = await BookServices.createBook(formData);
        if (result) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Add Successfully",
                showConfirmButton: false,
                timer: 1500,
            });
            navigate("/book");
        }
        if (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Add Failed",
                showConfirmButton: false,
                timer: 1500,
            });
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApiData()
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Thêm sách</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <form method='post' onSubmit={(e) => handleSubmitForm(e)}>
                                <div className="form-group">
                                    <label>Tên sách:</label>
                                    <input type="text" name='title' onChange={(e) => handleChangeValue(e)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Danh mục sách:</label>
                                    <select className="form-control" name='category' onChange={(e) => handleChangeValue(e)} id="exampleFormControlSelect1">
                                        <option hidden >Danh mục sách</option>
                                        {
                                            categories && categories.map((cate, i) => {
                                                return (
                                                    <option value={cate._id} key={i}>{cate.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Tác giả sách:</label>
                                    <input type="text" name='author' onChange={(e) => handleChangeValue(e)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Hình ảnh:</label>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" name='image'
                                            onChange={(e) => { handleChangeFile(e) }}
                                            accept="image/png, image/jpeg" />
                                        <label className="custom-file-label">Choose file</label>
                                    </div>
                                </div>
                                <div className="w-25">
                                    {postImage && (
                                        <img
                                            className='card-img'
                                            alt={postImage.name}
                                            src={URL.createObjectURL(postImage)}
                                        />
                                    )}
                                </div>

                                <div className="form-group">
                                    <label>Giá sách:</label>
                                    <input type="text" name='price' onChange={(e) => handleChangeValue(e)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Nội dung:</label>
                                    <textarea className="form-control" name='description' onChange={(e) => handleChangeValue(e)} rows="4"></textarea>
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

export default AddBook