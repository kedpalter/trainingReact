import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderHome = () => {



    return (
        <header>
            {/* bs5-navbar-background */}
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "bg-white text-dark nav-link" : "nav-link"} style={({ isActive }) => isActive ? { border: 'solid 1px red' } : {}} to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "bg-white text-dark nav-link" : "nav-link"} style={({ isActive }) => isActive ? { border: 'solid 1px red' } : {}} to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "bg-white text-dark nav-link" : "nav-link"} style={({ isActive }) => isActive ? { border: 'solid 1px red' } : {}} to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">React Router Dom</NavLink>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="/react-router-dom/demo-use-navigate">Demo use nav</NavLink>
                                <NavLink className="dropdown-item" to="/react-router-dom/use-search-param">Demo use search param</NavLink>
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </nav>
            {/* thẻ a đổi thành NavLink, href đổi thành to, để react chỉ load lại outlet thay vì load lại toàn bộ trang web */}
        </header>
    )
}

export default HeaderHome