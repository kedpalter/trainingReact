import React from 'react'
import CardProduct from './CardProduct'

const Content = () => {
  return (
    <div className='d-flex justify-content-around p-4 gap-3'>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
    </div>
  )
}

export default Content