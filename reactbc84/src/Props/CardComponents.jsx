import React from 'react'

const CardComponents = (props) => {
    let product = props.product; // let {product} = props;

    return (
        <div className='card'>
            <img src={product?.img} alt="..." />
            <div className="card-body">
                <h3 className="card-title">{product?.name}</h3>
                <p className="card-text">{product?.price}</p> 
                {/* Dấu ? dùng để .... */}
                <button className="btn btn-success">Detail</button>
            </div>
        </div>
    )
}

export default CardComponents