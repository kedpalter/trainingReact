import React from 'react'
import HangGhe from '../../components/HangGhe'
import { useSelector } from 'react-redux'

const BookingTicketPage = () => {


    const { dsGhe, dsGheDangDat } = useSelector(state => state.dsGheReducer)// state => state.{tên trong store}.{reducer}
    return (
        <div>
            <div className="container py-4" style={{ maxWidth: 900 }}>
                <h6 className="mb-3">Fill The Required Details Below And Select Your Seats</h6>
                <form className="row g-3 mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder="Enter your name" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Number of Seats <span className="text-danger">*</span></label>
                        <input type="number" className="form-control" placeholder="Enter number of seats" />
                    </div>
                    <div className="col-12">
                        <button type="button" className="btn btn-secondary mt-2">Start Selecting</button>
                    </div>
                </form>
                <div className="mb-3 d-flex align-items-center gap-3">
                    <span className="d-inline-block" style={{ width: 18, height: 18, background: 'green', borderRadius: 3, marginRight: 4 }}></span>
                    <span className=" me-3">Selected Seat</span>
                    <span className="d-inline-block" style={{ width: 18, height: 18, background: 'red', borderRadius: 3, marginRight: 4 }}></span>
                    <span className=" me-3">Reserved Seat</span>
                    <span className="d-inline-block" style={{ width: 18, height: 18, background: '#ffe5a0', borderRadius: 3, marginRight: 4, border: '1px solid orange' }}></span>
                    <span className="">Empty Seat</span>
                </div>
                <div className="bg-dark p-3 rounded mb-4">
                    <div className="d-flex justify-content-between mb-2 mx-auto" style={{ width: '65%' }}>
                        <div style={{ width: 30 }}></div>
                        {dsGhe[0].danhSachGhe.map((ghe, index) => {
                            return <span key={index} className="text-warning fw-bold text-center" style={{ width: 32 }}>{ghe.soGhe}</span>
                        })}
                    </div>
                    { /* Render the rows of seats */}
                    {dsGhe?.slice(1).map((hang, index) => {
                        return <HangGhe key={index} hang={hang} />
                    })}
                    <div className="d-flex justify-content-center mt-4">
                        <div className="bg-warning text-dark fw-bold py-2 px-5 rounded" style={{ letterSpacing: 4, fontSize: 18 }}>
                            SCREEN THIS WAY
                        </div>
                    </div>
                </div>
                <div className="text-center mb-4">
                    <button className="btn btn-success">Confirm Selection</button>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped text-center align-middle bg-white">
                        <thead className="table-light">
                            <tr>
                                {/* <th>Name</th> */}
                                <th>Number of Seats</th>
                                <th>Seats</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dsGheDangDat.map((ghe, index) => {
                                return <tr key={index}>
                                    <td>{ghe.soGhe}</td>
                                    <td>{ghe.gia.toLocaleString()}</td>
                                </tr>
                            })}
                            {/* <tr>
                                <td colSpan={3}>&nbsp;</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BookingTicketPage