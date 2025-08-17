import React from 'react'
import Ghe from './Ghe'

const HangGhe = (props) => {
    const { hang } = props
    return (
        <div className="d-flex justify-content-center mb-2 align-items-center" style={{ height: 40 }}    >
            <div className="text-warning fw-bold text-center" style={{ width: 40 }}>{hang.hang}</div>
            {hang?.danhSachGhe.map((ghe, index) => {
                return <Ghe key={index} ghe={ghe} />
            })}
        </div>
    )
}

export default HangGhe