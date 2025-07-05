import React from 'react'

const HandleEvent = () => {
    const handleClick = (e) => {
        e.target.className = "btn btn-dark";
        console.log(123);
    }

    const greeting = (name) => {
        console.log(`hello ${name}`);
    }

    return (
        <div className='container'>
            <h1>Handle Event</h1>
            <button className='btn btn-success' onClick={(e) => {
                e.target.className = "btn btn-dark";
                console.log('Clicked');
                greeting('Tên');
            }}>Click me</button>
            <button className='btn btn-primary' onClick={handleClick}>Click dạng callback</button>
            <button className='btn btn-danger' onClick={handleClick}>Click dạng callback</button>

        </div>
    )
}

export default HandleEvent