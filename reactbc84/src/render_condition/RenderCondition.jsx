import React from 'react'

const RenderCondition = () => {
    let isLogin = true;

    const renderLogin = () => {
        if (isLogin) {
            return <h3>Hello</h3>
        }
        return <button className='btn btn-dark' onClick={() => {

        }}>Login</button>
    }
  return (
    <div>
        <h1>Render Condition</h1>
            <div className="header" class="d-flex justify-content-between align-items-center bg-primary p-5">
                <nav className="menu text-decoration-none display-6">
                    <a href="#" className="logo text-white mx-2">CyberSoft</a>
                    <a href="#" className="home text-white mx-2">Home</a>
                    <a href="#" className="about text-white mx-2">About</a>
                </nav>
                <div className="login">
                    {/* {isLogin ? <h3>Hello Name</h3> : <button className="btn btn-dark">Login</button>} */}
                    {renderLogin()}
                </div>
            </div>
    </div>
  )
}

export default RenderCondition