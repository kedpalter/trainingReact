import React from 'react'

export const BT_ProductItem = (props) => {

    let { dataItem } = props;
    return (
        <div>
            <img src={dataItem.image} alt="..." />
            <div className="card-body">
                <div className="card-title">{dataItem.name}</div>
                <div className="card-text">1000</div>
                <button className="btn btn-dark">Detail</button>
            </div>
        </div>
    )
}

export default BT_ProductItem
