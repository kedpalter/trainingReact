import React from 'react'

const BT_SanPham = (props) => { //props.item, props.handleSetStateProduct
    let { item, handleSetStateProduct } = props;
    return (
        <div className="card">
            <img src={item.hinhAnh} alt="..." height={250} style={{ objectFit: 'contain' }} />
            <div className="card-body">
                <div className="phone-name">{item.tenSP}</div>
                <div className="phone-price">{item.giaBan}</div>
                <button className='btn btn-success' onClick={(e) => {
                    handleSetStateProduct(item);
                }}>Xem chi tiết</button>
                <button className='btn btn-outline-dark mx-2' onClick={(e) => {
                    // Xử lý thay đổi state giỏ hàng
                    const sanPhamGioHang = {...item, soLuong: 1};
                    setGioHang(stateGioHang => {
                        stateGioHang.push(sanPhamGioHang);
                        return [...stateGioHang]; // imutable
                    })
                }}>Thêm giỏ hàng</button>
            </div>
        </div>
    )
}

export default BT_SanPham