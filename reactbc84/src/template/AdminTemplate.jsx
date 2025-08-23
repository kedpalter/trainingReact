import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminTemplate() {
    return (
        <div>
            {/* Top navbar */}
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <button
                        className="btn btn-outline-light d-md-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sidebarMenu"
                        aria-controls="sidebarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        ☰
                    </button>
                    <a className="navbar-brand ms-2" href="#">
                        MATERIAL ADMIN PRO
                    </a>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-sm btn-outline-light me-2">Documentation</button>
                        <button className="btn btn-sm btn-danger">Buy Now</button>
                    </div>
                </div>
            </nav>

            <div className="container-fluid" style={{ marginTop: 56 }}>
                <div className="row">
                    {/* Sidebar */}
                    <nav
                        id="sidebarMenu"
                        className="col-md-2 col-lg-2 d-md-block bg-light sidebar collapse"
                        style={{ minHeight: "calc(100vh - 56px)", paddingTop: 20 }}
                    >
                        <div className="position-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a className="nav-link active" href="#">
                                        <span className="me-2">🏠</span> Admin dashboard
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a className="nav-link" href="#">
                                        <span className="me-2">📊</span> Product management
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a className="nav-link" href="#">
                                        <span className="me-2">📁</span> Pages
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a className="nav-link" href="#">
                                        <span className="me-2">🔌</span> Plugins
                                    </a>
                                </li>
                            </ul>

                            <hr />

                            <h6 className="px-3 text-muted">UI Toolkit</h6>
                            <ul className="nav flex-column px-2">
                                <li className="nav-item mb-1">
                                    <a className="nav-link" href="#">Components</a>
                                </li>
                                <li className="nav-item mb-1">
                                    <a className="nav-link" href="#">Forms</a>
                                </li>
                                <li className="nav-item mb-1">
                                    <a className="nav-link" href="#">Utilities</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* Main content */}
                    <main className="col-md-10 ms-sm-auto px-4">
                        

                        {/* Section title */}
                        <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
                            <h5 className="mb-0">Dashboards</h5>
                            <small className="text-muted">Six pre-built, customizable demos</small>
                        </div>

                        {/* Static gallery preview (pure markup) */}
                        <div className="row g-3">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card">
                                    <img
                                        src="https://via.placeholder.com/600x300?text=Default+Dashboard"
                                        className="card-img-top"
                                        alt="default"
                                    />
                                    <div className="card-body">
                                        <p className="card-text small text-center">Default Dashboard</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card">
                                    <img
                                        src="https://via.placeholder.com/600x300?text=Minimal+Dashboard"
                                        className="card-img-top"
                                        alt="minimal"
                                    />
                                    <div className="card-body">
                                        <p className="card-text small text-center">Minimal Dashboard</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card">
                                    <img
                                        src="https://via.placeholder.com/600x300?text=Analytics+Dashboard"
                                        className="card-img-top"
                                        alt="analytics"
                                    />
                                    <div className="card-body">
                                        <p className="card-text small text-center">Analytics Dashboard</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CONTENT OUTLET: pages will render here */}
                        <div className="mt-4">
                            <Outlet />
                        </div>

                        <footer className="mt-5 mb-4 text-muted small">
                            <div>Copyright © Your Website 2025</div>
                        </footer>
                    </main>
                </div>
            </div>
        </div>
    );
}