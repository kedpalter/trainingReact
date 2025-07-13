import React from 'react'
import { dataProduct } from '../../data/dataProduct'
import { BT_ProductItem } from './BT_ProductItem'

const BT_ProductList = () => {
    const renderProduct = () => {
        let arrJSX = [];
        for (let item of dataProduct) {
            let divProductItem = <div className='col-md-4 mt-2' key={item.id}>
                <div>{item.name}</div>
                <BT_ProductItem />
            </div>
            // Thêm jsx vào arrJSX
            arrJSX.push(divProductItem);
        }
        return arrJSX; //[<div1>, <div2>, <div3>]
    }

    return (
        <div>
            <div className='container'>
                <h3>Product list</h3>
                <div className="row">
                    {renderProduct()}
                </div>
            </div>

        </div>
    )
}

export default BT_ProductList