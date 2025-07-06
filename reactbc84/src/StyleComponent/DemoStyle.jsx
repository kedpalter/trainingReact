import React from 'react'
import cssStyle from './DemoStyle.module.css';

const DemoStyle = () => {
    const jsonCss = { color: 'white', backgroundColor: 'black' };

    return (
        <div className='container'>
            <h1>Style Component</h1>
            <p style={{
                color: 'red',
                background: 'blue'
            }}>Lorem ipsum dolor sit amet.</p>
            <div style={jsonCss}>Lorem ipsum dolor sit amet.</div>

            <p className={cssStyle.pBlue}>Lorem ipsum dolor sit amet.</p>
            <p className={`bg-secondary ${cssStyle.pBlue} ${cssStyle['border-red']}`}>Lorem ipsum dolor sit amet.</p>

        </div>
    )
}

export default DemoStyle