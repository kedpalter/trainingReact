import React from 'react'
import Child from './Child'
import CardComponents from './CardComponents'
import DemoPropsChildren from './DemoPropsChildren'

let sp1 = {
    id: 1,
    name: 'iphone',
    price: 1500,
    img: 'https://dummyimage.com/600x400/ddd'
}
let sp2 = {
    id: 2,
    name: 'samsung',
    price: 1700,
    img: 'https://dummyimage.com/600x400/ddd'
}
const DemoProps = () => {
    return (
        <div className='container'>
            <h1>Demo Props (properties component)</h1>
            <Child noiDung="tiêu đề 1" />
            <Child noiDung="tiêu đề 2" />
            <Child noiDung="tiêu đề 3" />
            <div className="row">
                {/* <div className="col-3">
                    <CardComponents tenSP="Iphone" gia="1000"/>
                </div>
                <div className="col-3">
                    <CardComponents tenSP="Samsung" gia="1000"/>
                </div> */}
                <div className="col-3">
                    <CardComponents product={sp1} />
                </div>
                <div className="col-3">
                    <CardComponents product={sp2} />
                </div>
            </div>
            <DemoPropsChildren>
                <p className='text-danger'>Lorem ipsum dolor sit amet.</p>
                <p className='text-danger'>Lorem ipsum dolor sit amet.</p>
            </DemoPropsChildren>
        </div>
    )
}

export default DemoProps