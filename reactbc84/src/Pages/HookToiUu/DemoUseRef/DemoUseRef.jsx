import Password from 'antd/es/input/Password'
import React, { useRef, useState } from 'react'

const DemoUseRef = () => {
    const refButton = useRef(null);


    // const [account, setAccount] = useState({
    //     email: '',
    //     password: '',
    // });

    // Trường hợp ko sử dụng state, để account như 1 biến bt chỉ ghi nhận khi bấm submit cũng được. Nhưng có rủi ro là nếu đang có 1 state khác render lại, thông tin nhập cũng biến mất → dùng useRef
    const [number, setNumber] = useState(1);
    // useRef thường sử dụng trong các form không validation
    const account = useRef({
        email: '',
        password: '',
    });
    // useRef: lưu giá trị qua các lần render, tham chiếu đến thẻ dom mà không phải re-render
    // useState (redux) dùng cho các form có validation. Form có validation thì bắt buộc phải dùng useState (useFormik)
    const handleChange = (e) => {
        const { name, value } = e.target;
        // setAccount({ ...account, [name]: value }); // của useState
        account.current[name] = value; // ở useRef: dùng current
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle Submit account: ', account.current);

        refButton.current.className = 'btn btn-danger w-100';
    }
    console.log(account)



    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <button className='btn btn-success' onClick={() => { setNumber(number + 1) }}>Number: {number}</button>
            <div className="card p-4 shadow" style={{ maxWidth: 400, width: '100%' }}>
                <div className="text-center mb-4">
                    <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
                        alt="Google Logo"
                        style={{ width: 92, height: 30 }}
                    />
                    <h5 className="mt-3">Sign in</h5>
                    <p className="text-muted mb-0">to continue to Google</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email or phone"
                            onChange={handleChange}
                            name='email'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            onChange={handleChange}
                            name='password'
                        />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <a href="#" className="small text-primary">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn btn-primary w-100" ref={refButton}>
                        Next
                    </button>
                </form>
                <div className="text-center mt-3">
                    <a href="#" className="small">Create account</a>
                </div>
            </div>
        </div>
    )
}

export default DemoUseRef