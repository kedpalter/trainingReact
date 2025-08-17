// rxslice
import { createSlice } from '@reduxjs/toolkit'
import { dsGhe } from '../data/danhSachGhe';

const initialState = {
    dsGhe: dsGhe,
    dsGheDangDat: [
        { "soGhe": "A1", "gia": 75000, "daDat": false },
        { "soGhe": "A2", "gia": 75000, "daDat": false }
    ],
}

const dsGheReducer = createSlice({
    name: "dsGheReducer",
    initialState,
    reducers: {
        datGhe: (state, action) => {
            const { payload } = action;
            // Kiểm tra ghế đã được đặt hay chưa
            const indexGheDangDat = state.dsGheDangDat.findIndex(ghe => ghe.soGhe === payload.soGhe);
            if (indexGheDangDat !== -1) {
                state.gheDangDat.splice(indexGheDangDat, 1); // Nếu đã đặt thì bỏ ghế đó ra khỏi danh sách đang đặt
            } else {
                state.dsGheDangDat.push(payload); // Nếu chưa đặt thì thêm ghế vào danh sách đang đặt
            }
            // return {...state,dsGheDangDat: [...state.dsGheDangDat]}; 
        }
    }
});

export const { datGheAction } = dsGheReducer.actions

export default dsGheReducer.reducer