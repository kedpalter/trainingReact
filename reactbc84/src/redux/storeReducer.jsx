/*
    Tạo reducer -> xây dựng giao diện -> lấy dữ liệu từ reducer về component qua useSelector -> tạo action thunk call api lấy dữ liệu -> dispatch dữ liệu lên reducer -> reducer cập nhật state mới -> component nhận state mới từ redux về
*/
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    arrStore: [],
}

const storeReducer = createSlice({
    name: 'storeReducer',
    initialState,
    reducers: {
        // reducers cập nhật state mới
        getAllStore: (state, action) => {
            state.arrStore = action.payload // data từ payload ở dưới dispatch lên reducer
            return { ...state, arrStore: [...state.arrStore] }
        }
    }
});

export const getApiActionThunk = () => {

    return async (dispatch, getState) => {
        try {

            const res = await axios({
                url: 'https://apistore.cybersoft.edu.vn/api/Store/getAll',
                method: 'GET',
            });
            // dispatch lên reducer
            const action = getAllStore(res.data.content);
            dispatch(action);

        } catch (err) {
            console.log(err)
        }
    }

}

export const { getAllStore } = storeReducer.actions

export default storeReducer.reducer