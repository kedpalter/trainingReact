import React, { useState } from 'react'

const ChangeColorCar = () => {

  let [color, setImg] = useState('/img/steel-car.jpg');

  const changeColor = (color) => {
    let imgNew = `/img/${color}-car.jpg`;
    setImg(imgNew);
  }

  return (
    <div className='container'>
      <h1>Change color car</h1>
      <div className="d-flex">
        <div className="car w-50">
          <img src={color} alt="..." className='w-100' />
        </div>
        <div className="control">
          <button className="btn btn-danger" onClick={() => {
            changeColor('red');
          }}>Red car</button>
          <button className="btn btn-secondary" onClick={() => {
            changeColor('silver');
          }}>Silver car</button>
          <button className="btn btn-dark" onClick={() => {
            changeColor('black');
          }}>Black car</button>
        </div>
      </div>


    </div>
  )
}

export default ChangeColorCar