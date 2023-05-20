import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    status: 'idle'
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        //
    },
    extraReducers: (builder)=> {
        builder.addCase(getProducts.fulfilled, (state, action)=>{
            state.data = action.payload;
        })
    }
})

export const getProducts = createAsyncThunk('getProducts/get', async ()=>{
    const data = await fetch('https://fakestoreapi.com/products');
    const result = await data.json();
    return result;
})

export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;