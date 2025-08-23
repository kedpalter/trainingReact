import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';



const initialState = {
    arrProduct: [],
    productEdit: { }
    // https://apistore.cybersoft.edu.vn/api/Product/getid?id=1
}

const ProductReducer = createSlice({
    name: 'ProductReducer',
    initialState,
    reducers: {
        getAllProductAction: (state, action) => {
            // Lấy dữ liệu từ action.payload => gán vào state.arrProduct
            state.arrProduct = action.payload;
            // return {...state, arrProduct: [...state.arrProduct]}
        },
        getProductEditAction: (state, action) => {
            state.productEdit = action.payload;
        }
    }
});

export const { getAllProductAction, getAllProductEditAction } = ProductReducer.actions

export default ProductReducer.reducer
// -----------------ACTION THUNK -----------------------

export const getAllProductActionThunk = async (dispatch, getState) => {
    try {
        const rootReducer = getState();
        console.log(rootReducer)


        const res = await axios({
            url: 'https://apistore.cybersoft.edu.vn/api/Product',
            method: 'GET',
        })
        // Sau khi có dữ liệu từ api → dispatch lên recuder
        const action = {
            type: 'ProductReducer/getAllProductAction',
            payload: res.data.content
        }
        // Gửi dữ liệu lên reducer
        dispatch(action);
    } catch (err) {
        console.log(err)
    }
}
// ------------------------- CLOSURE FUNCTION ------------------
export const getAllProductEditApiThunk = (idProduct) => {
    return async (dispatch, getState) => {
        try {
            const rootReducer = getState();
            console.log(rootReducer)


            const res = await axios({
                url: `https://apistore.cybersoft.edu.vn/api/Product/getid?id=${idProduct}`,
                method: 'GET',
            })
            // Sau khi có dữ liệu từ api → dispatch lên recuder
            const action = {
                type: 'ProductReducer/getAllProductAction',
                payload: res.data.content
            }
            // Gửi dữ liệu lên reducer
            dispatch(action);
        } catch (err) {
            console.log(err)
        }
    }
}