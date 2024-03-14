import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as AuthServices from "../../services/AuthService"
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducers/user';

function Login() {
    const initData = {
        email: "",
        password: ""
    }
    const [loginData, setLoginData] = useState(initData);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChangeValue = async (e) => {
        const { name, value } = await e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const [result, error] = await AuthServices.login(loginData);
        if (result) {
            console.log(result);
            dispatch(setUser(result.userData))
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            navigate("/");
        }
        if (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Failed',
                showConfirmButton: false,
                timer: 1500
            })
            console.log(error);
        }
    };

    return (
        <section className="sign-in-page">
            <div className="container p-0">
                <div className="row no-gutters height-self-center">
                    <div className="col-sm-12 align-self-center page-content rounded">
                        <div className="row m-0">
                            <div className="col-sm-12 sign-in-page-data">
                                <div className="sign-in-from bg-primary rounded">
                                    <h3 className="mb-0 text-center text-white">Sign in</h3>
                                    <p className="text-center text-white">
                                        Enter your email address and password to access to web
                                    </p>
                                    <form className="mt-4 form-text" method='post' onSubmit={(e) => handleSubmitForm(e)}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input
                                                type="email"
                                                className="form-control mb-0"
                                                id="exampleInputEmail1"
                                                placeholder="Enter email"
                                                name='email'
                                                onChange={(e) => handleChangeValue(e)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input
                                                type="password"
                                                className="form-control mb-0"
                                                id="exampleInputPassword1"
                                                placeholder="Password"
                                                name='password'
                                                onChange={(e) => handleChangeValue(e)}
                                            />
                                        </div>
                                        <div className="sign-info text-center">
                                            <button
                                                type="submit"
                                                className="btn btn-white d-block w-100 mb-2"
                                            >
                                                Sign in
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login