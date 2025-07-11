import React, { useState } from 'react'

const TinkerApp = () => {

    let [img, setImg] = useState("https://i.pravatar.cc/?u=1");
    
    const randomImg = () => {
        let newNum = Math.floor(Math.random() * 70);

        let nextPerson = `https://i.pravatar.cc/?u=${newNum}`;
        setImg(nextPerson);
    }

    return (
        <div className='container'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a className="btn btn-primary" onClick={() => {
                        randomImg();
                    }}>Change</a>
                </div>
            </div>
        </div>
    )
}

export default TinkerApp