import React from 'react'

const DemoPropsChildren = (props) => {
    return (
        <div className='container'>
            <h3>Props Children</h3>
            {props.children}
        </div>
    )
}

export default DemoPropsChildren