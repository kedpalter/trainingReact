import React from 'react'
import HeaderReact from './HeaderReact'
import FooterReact from './FooterReact'
import Navigation from './Navigation'
import Content from './Content'


const BT1_HomeComponent = () => {


    return (
        <>
            <HeaderReact/>
            <div className='d-flex'>
                <div className="col-4 bg-success">
                    <Navigation />
                </div>
                <div className="col-8">
                    <Content/>
                </div>
            </div>
            <FooterReact/>
        </>


    )
}

export default BT1_HomeComponent