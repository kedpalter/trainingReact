import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Space, Table, Tag } from 'antd';
import { NavLink } from 'react-router-dom';
// import type { TableProps } from 'antd';

const TableAntDemo = () => {
    // VD call api lấy danh sách giày → hiển thị ra table của antd
    const [arrProd, setArrProd] = useState([]);

    const dataColumns = [
        {
            title: "id",
            dataIndex: "id",
            index: "id",
        },
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            index: "name"
        },
        {
            title: "Hình ảnh",
            dataIndex: "image",
            index: "image",
            render: (value, item) => {
                // console.log('item', item);
                // console.log('value', value);
                return <NavLink to={`/demo-use-param/${item.id}`}>
                    <img src={value} alt={item.alias} width={50} height={50} />
                </NavLink>
            }
        },
        {
            title: "action",
            dataIndex: "action",
            index: "action",
            render: (value, item) => {
                return <>
                    <button className="btn btn-primary" onClick={()=>{}}>Edit</button>
                    <button className="btn btn-danger mx-2" onClick={()=>{}}>Delete</button>
                </>
            }
        }
    ]




    const getAllProductsApi = async () => {
        console.log(arrProd)
        try {
            const res = await axios({
                url: `https://apistore.cybersoft.edu.vn/api/Product`,
                method: 'GET'
            });
            setArrProd(res.data.content)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAllProductsApi(); // gọi api đưa vào state
    }, [])

    return (
        <div>
            <Table columns={dataColumns} dataSource={arrProd} />
        </div>
    )
}

export default TableAntDemo