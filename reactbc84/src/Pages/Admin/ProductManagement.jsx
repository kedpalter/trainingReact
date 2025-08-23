import React, { use, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductActionThunk } from '../../redux/ProductReducer';
import { Table } from 'antd';
import { NavLink } from 'react-router-dom';

const ProductManagement = () => {
    const columns = [
        {
            title: 'ID',
            dateIndex: 'id',
            key: 'id',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <img src={image} alt='product' style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => `$${price}`
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (action, item) =>{
                <div>
                    <NavLink className='btn btn-sm btn-primary me-2' to={`/admin/product-edit/${item.id}`}>Edit</NavLink>
                    <button className='btn btn-sm btn-danger'>Delete</button>
                </div>
            }
        }

    ];
    //lấy dữ liệu từ redux
    const { arrProduct } = useSelector(state => state.productReducer);
    const dispatch = useDispatch();

    const getAllProductApi = async () => {
        dispatch(getAllProductActionThunk);
    }
    useEffect(() => {
        getAllProductApi();
    }, [])

    return (
        <div>
            <div className="card mt-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">Recent Salse</h4>
                    <a href="#" className="text-primary">Show All</a>
                </div>
                <div className="card-body p-0">
                    <Table
                        dataSource={arrProduct}
                        columns={columns}
                        rowKey={'id'}
                        pagination={false}
                    />

                </div>
            </div>

        </div>
    )
}

export default ProductManagement