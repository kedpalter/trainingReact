import React, { memo } from 'react'

const CartMemo = (props) => {

    console.log('cart memo render')
    console.log(props.cartData);




    return (
        <div className='container mt-4'>
            <h2>Cart</h2>
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Example row */}
                    {props.cartData.map((item, index) => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>1</td>
                            <td>{item.price}</td>
                            <td>{item.price}</td>
                            <td>
                                <button className="btn btn-danger btn-sm">Remove</button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default memo(CartMemo);
/*
    memo check xem component có props thay đổi hay ko? Để quyết định render lại giao diện
    So sánh props thay đổi là so sánh primitive (string, number, boolean).
*/