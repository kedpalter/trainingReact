import React, { useState } from 'react'
import { dataPhone } from '../../data/dataPhone'
import BT_SanPham from './BT_SanPham';
import BT_GioHang from './BT_GioHang';

const BT_StateProps = () => {
    // 2. Use State → Data Binding
    const [productDetail, setProductDetail] = useState(
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700, "hinhAnh": "./img/vsphone.jpg" }
    );
    // --------------------------
    const [gioHang, setGioHang] = useState([
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700, "hinhAnh": "./img/vsphone.jpg", soLuong: 10 }
    ])
    // 1. Với mỗi dataPhone sẽ render ra 1 card | Phần DS Sản phẩm
    const renderPhone = () => {
        let arrPhoneJSX = dataPhone.map((item, index) => {
            return <div className="col-md-4 mt-2">
                <BT_SanPham item={item} handleSetStateProduct={handleViewDetail} setGioHang={setGioHang} />
            </div>
        });
        return arrPhoneJSX;
    }
    // Gán vào nút
    const handleViewDetail = (prodClick) => { // click vào item nào thì set state lại product detail = item đó
        setProductDetail(prodClick);
    }

    const xuLyXoaSP = (maSP) => {
        // Lọc ra giỏ hàng mới mà: không có sản phẩm có mã sản phẩm là maSP
        let gioHangMoi = gioHang.filter((item) => {
            return item.maSP != maSP;
        })
        // Cập nhật lại giỏ hàng mới
        setGioHang(gioHangMoi);
    }

    // const themGioHang = (spClick) => {
    //     // Tạo ra sản phẩm có số lượng
    //     const sanPhamGioHang = { ...spClick, soLuong: 1 };
    //     // Clone giỏ hàng ra vùng nhớ mới
    //     let gioHangMoi = [...gioHang]
    //     gioHangMoi.push(sanPhamGioHang);
    //     // Kiểm trả sản phẩm được click có trong giỏ hàng chưa (nếu có thì tăng số lượng, nếu chưa thì thêm vào)
    //     // let itemGioHang = gioHangMoi.find(sp => sp.maSP == spClick.maSP);
    //     // if (itemGioHang) {
    //     //     itemGioHang.soLuong++; // itemGioHang != undefined
    //     // } else {
    //     //     gioHangMoi.push(sanPhamGioHang);
    //     // }
    //     // gọi hàm setState đưa vào giỏ hàng mới
    //     setGioHang(gioHangMoi)
    // }
    // ---------- Phần xử lý thay đổi state giỏ hàng trong BT_SanPham →
    // themGioHang(item);
    return (
        <div className='container'>
            <BT_GioHang gioHang={gioHang} xoaSanPham={xuLyXoaSP}/>

            <h3>Danh sách sản phẩm</h3>
            <div className="phones row">
                {renderPhone()}


                <div className="detail mt-5 row">
                    <div className='col-3'>
                        <h3 className='phone-name'>{productDetail.tenSP}</h3>
                        <img src={productDetail.hinhAnh} alt="..." height={250} style={{ objectFit: 'contain' }} />
                    </div>
                    <div className="col-9">
                        <h3>Thông số kỹ thuật</h3>
                        <div className='table'>
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{productDetail.manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{productDetail.heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <th>{productDetail.cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <th>{productDetail.cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>ram</th>
                                    <th>{productDetail.ram}</th>
                                </tr>
                                <tr>
                                    <th>rom</th>
                                    <th>{productDetail.rom}</th>
                                </tr>

                            </thead>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BT_StateProps