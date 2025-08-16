import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        list: [
            {
                id: "1",
                name: "Product 1",
            },
            {
                id: "2",
                name: "Product 2",
            }
        ],
        products: [],
        carts: []
    },
    reducers: {
        setProductList: (state, action) => {
            const products = action.payload // action redux là obj có key type và payload
            state.list = products;
            console.log(state, "|", action)
        },
        setAddToCart: (state, action) => {
            const product = action.payload // sản phẩm được thêm vào giỏ
            state.carts.push(product) // thêm 1 sản phẩm vào giỏ
        },
    }

});

export default productSlice.reducer;
export const { setAddToCart, setProductList } = productSlice.actions