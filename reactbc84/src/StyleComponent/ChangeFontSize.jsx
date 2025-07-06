import React, { useState } from 'react'

const ChangeFontSize = () => {

    let [font, setFont] = useState(30);

    return (
        <div className='container'>
            <h1 className='' style={{ fontSize: `${font}px` }}>Press to change</h1>

            <button className="btn btn-danger" onClick={() => {
                setFont(font - 2);
            }}>-</button>
            <button className="btn btn-success" onClick={() => {
                setFont(font + 2);
            }}>+</button>
        </div>
    )
}

export default ChangeFontSize