import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApiActionThunk } from './storeReducer';

const BTStore = () => {

    // lấy dữ liệu từ producer về component bằng useSelector
    const { arrStore } = useSelector(state => state.storeReducer);
    const dispatch = useDispatch();

    const getAllStore = async () => {
        const actionThunk = getApiActionThunk();
        dispatch(actionThunk);
    }

    useEffect(() => {
        getAllStore();
    }, [])
    console.log(arrStore)

    return (
        <div className='container'>
            <div className='card-body p-0'></div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>John</td>
                        <td>Doe</td>
                        <td>@social</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}

export default BTStore