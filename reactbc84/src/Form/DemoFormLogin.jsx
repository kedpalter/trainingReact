import React, { useState } from 'react'

const DemoFormLogin = () => { //userLogin = {username:'', password:''}
    const [userLogin, setUserLogin] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState({ username: '', email: '', password: '' });
    let [valid, setValid] = useState(true);


    // [e.target.id]: e.target.value → [id]: value

    const handleChangeInput = (e) => {
        // Xử lý value
        let { id, value } = e.target; // Bóc tách phần tử
        let newUserLogin = { ...userLogin, [id]: value };  // clone lại giá trị cũ VÌ cần giữ lại các giá trị trước đó

        // Xử lý error
        let newError = {
            ...error,
        };
        if (value.trim() === '') { // trim(): loại bỏ khoảng trắng đầu cuối chuỗi
            newError[id] = `${id} cannot be blank!`
        } else {
            newError[id] = '';
            // Nếu ko bỏ trống thì check tiếp Regex
            switch (id) {
                case 'email': {
                    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if (!emailRegex.test(value)) {
                        newError[id] = `${id} is invalid`;
                    }
                }; break;
                case 'password': {
                    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[\s\S]{8,32}$/;
                    if (!passwordRegex.test(value)) {
                        newError[id] = `Password must be 8-32 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character`
                    }
                }; break;
            }
        }
        // Sau khi xử lý cả value và error mới cho function render lại
        setUserLogin(newUserLogin);
        setError(newError);
        // Xử lý valid form
        checkValidForm(newUserLogin, newError); // truyền tham số vừa cập nhật vào check valid, nếu không sẽ bị trễ 1 nhịp input
    }
    // Cách cơ bản (dài dòng) hơn: đưa nội dung hàm vào onClick cho từng thành phần, thay [e.target.id] thành id tương ứng cho từng thành phần

    const handleSbumit = (e) => {
        e.preventDefault();
        if (!valid) { // Nếu cờ valid = false thì không cho submit
            return;
        }
        console.log('submit')
    }


    const checkValidForm = (newUserLogin, newError) => {
        // check value tất cả phải khác rỗng
        for (let key in newUserLogin) {
            if (newUserLogin[key].trim() == '') {
                setValid(false);
                return;
            }
        }
        // check value tất cả lỗi phải rỗng
        for (let key in newError) {
            if (newError[key] !== '') {
                setValid(false);
                return;
            }
        }
        // Nếu không rơi vào bất kì return nào thì form hợp lệ
        setValid(true);
    }

    return (
        <form className='container' onSubmit={handleSbumit}>
            <div className="w-50 mx-auto">
                <h3>Login</h3>
                <div className="form-group">
                    <label htmlFor="">Username</label>
                    <input type="text" className="form-control" name='username' id='username' onChange={handleChangeInput} />
                    <p className='text text-danger'>{error.username}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control" name='email' id='email' onChange={handleChangeInput} />
                    <p className='text text-danger'>{error.email}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control" name='password' id='password' onChange={handleChangeInput} />
                    <p className="text text-danger">{error.password}</p>
                </div>
                <div className="form-group">
                    <button className='btn btn-success' disabled={!valid}>Log in</button>
                </div>
            </div>
        </form>
    )
}

export default DemoFormLogin