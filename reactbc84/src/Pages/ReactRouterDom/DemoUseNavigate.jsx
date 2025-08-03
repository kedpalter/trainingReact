import React from 'react'
import { replace, useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

/*
    Trang xử lý đăng nhập
    Nếu đăng nhập đúng tk → Chuyển đến trang home | Nếu sai → Chuyển đến trang quên mật khẩu
*/
const DemoUseNavigate = () => {
    const navigate = useNavigate();
    
    const frmLogin = useFormik({
        initialValues: {
            email: '',
            password: ''
        }, onSubmit: (value) => {
            // Xử lý chuyển hướng trang
            console.log(value);
            if (value.email == 'cybersoft@gmail.com' && value.password == 'cybersoft123') {
                navigate('/');
            } else {
                navigate('/react-router-dom/forgot-pass')
                // navigate('/react-router-dom/forgot-pass', { replace: true })
                // replace: Thay dổi trang hiện tại bằng trang chuyển hướng đến
            }
        }
    })


    return (
        <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100">
                <div className="col-md-6 text-center text-md-start mb-5 mb-md-0 px-4">
                    <h1 className="text-primary fw-bold display-3">facebook</h1>
                    <p className="fs-4">
                        Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn. <button className='btn btn-dark' onClick={(e) => {
                            navigate(-1);
                        }}></button>
                    </p>
                </div>
                <div className="col-md-5 d-flex justify-content-center">
                    <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "400px" }}>
                        <form onSubmit={frmLogin.handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Email hoặc số điện thoại"
                                    id='email'
                                    name='email'
                                    onChange={frmLogin.handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Mật khẩu"
                                    id='password'
                                    name='password'
                                    onChange={frmLogin.handleChange}
                                />
                            </div>
                            <div className="d-grid mb-3">
                                <button className="btn btn-primary btn-lg" type="submit">
                                    Đăng nhập
                                </button>
                            </div>
                            <div className="text-center mb-3">
                                <a href="#" className="text-decoration-none">
                                    Quên mật khẩu?
                                </a>
                            </div>
                            <hr />
                            <div className="d-grid">
                                <button className="btn btn-success btn-lg" type="button">
                                    Tạo tài khoản mới
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemoUseNavigate