import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ChangeNumberRedux = () => {
    // Lấy dữ liệu từ redux về component
    const number = useSelector(state => state.numberReducer);
    const dispatch = useDispatch(); // hàm này dùng để đưa dữ liệu lên redux store
  return (
    <div>
        <h3>Change Number Redux</h3>
        <h3>number: {number}</h3>
        <button className="btn btn-success mr-2" onClick={()=>{
            const actionOb = {
                type: 'CHANGE_NUMBER_ACTION',
                payload: 1
            }
            // dùng hàm Dispatch -> gửi action đi
            dispatch(actionOb);
        }}>+</button>
        <button className="btn btn-success mr-2" onClick={()=>{
            const actionOb = {
                type: 'CHANGE_NUMBER_ACTION',
                payload: -1
            }
            dispatch(actionOb)
        }}>-</button>
    </div>
  )
}

export default ChangeNumberRedux