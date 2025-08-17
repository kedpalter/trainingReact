import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { datGheAction } from '../redux/dsGheReducer';

const Ghe = (props) => {
    const { dsGheDangDat } = useSelector(state => state.dsGheReducer);
    const { ghe } = props;
    const dispatch = useDispatch();


    const renderGhe = () => {
        if (ghe.daDat) {
            return <div><button type="button" className="btn btn-danger btn-sm mx-1 text-white" style={{ width: 35, height: 35, background: '', border: '', borderRadius: 4, margin: 2, padding: 0 }} disabled>{ghe.soGhe}</button></div>
        } else {
            let classGhe = "btn btn-outline-warning btn-sm mx-1 text-white";
            let index = dsGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if (index !== -1) {
                classGhe = "btn btn-success btn-sm mx-1 text-white";
            }
            return <div><button type="button" className={classGhe} style={{ width: 35, height: 35, background: '', border: '2px solid orange', borderRadius: 4, margin: 2, padding: 0 }} onClick={() => {
                // const action = {
                //     type: 'dsGheReducer/datGhe',
                //     payload: ghe
                // };


                // Tạo action thông qua action creator
                const action = datGheAction(ghe);
                console.log(action);
                //----------------------------------
                
                dispatch(action);
            }}>{ghe.soGhe}</button></div>
        }
    }

    return (
        <>
            {renderGhe()}
        </>
    )
}

export default Ghe