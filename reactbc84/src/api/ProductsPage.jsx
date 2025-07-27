import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductsPage = (props) => {

    const [arrProduct, setArrProduct] = useState([]);

    // const getAllProductApi = async () => {
    //     // Gọi api từ backend
    //     try {
    //         let res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product`);
    //         let data = await res.json();
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    const getProductApiAxios = async () => {
        try {
            let response = await axios({
                url: `https://apistore.cybersoft.edu.vn/api/Product`,
                method: 'GET'
            });
            // sau khi lấy dữ liệu từ api về thì setState
            setArrProduct(response.data.content);
            // console.log(response.data.content);
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => { //function hook useEffect
        // Sau khi HTML được khởi tạo lần đầu tiên và sau mỗi lần setState (bất kỳ state nào)
        getProductApiAxios();
    }, []);
    // state dependencies: thì state nào liệt kê trong mảng thay đổi thì hàm này mới gọi lại. Nếu là mảng rỗng (không phụ thuộc vào state nào) nên chỉ gọi 1 lần

    return (
        <div className='container'>
            <button onClick={() => {
                // getAllProductApi();
                getProductApiAxios();
            }}>Call api Product</button>

            <h3>Product List</h3>
            <div className="row">
                {arrProduct.map((item, index) => {
                    return <div className="col-3 mt-2" key={index}>
                        <div className="card">
                            <img src={item.image} />
                            <div className="card-body">
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                <button className='btn btn-success'>Detail</button>
                            </div>
                        </div>
                    </div>
                })}

            </div>
            {/* <div className="row">
                <div className="col-3 mt-2">
                        <div className="card">
                            
                            <div className="card-body">
                                <h3>abc</h3>
                                <p>abc</p>
                                <button className='btn btn-success'>Detail</button>
                            </div>
                        </div>
                    </div>
            </div> */}
        </div>
    )
}

export default ProductsPage