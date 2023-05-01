import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const newAxios = axios.create({
    baseURL : "https://dummyjson.com/",
    timeout : 1000,
})

export const getProducts = createAsyncThunk("products/getProducts", async()=>{
    const res = await newAxios.get("products");
    console.log(res);
    return res.data;
});


const initialState = {
    products : [],
    isLoading : false,
    error : null
}

export const productSlice = createSlice({
    name : "products",
    initialState,
    extraReducers : (builder)=>{
        builder
        .addCase(getProducts.pending , (state)=>{
            state.isLoading = true;
            state.products = [];
            state.error = null;
        })
        .addCase(getProducts.fulfilled , (state,action)=>{
            console.log(action)
            state.isLoading = false;
            state.products = action.payload;
            state.error = null;
        })
        .addCase(getProducts.rejected , (state , action)=>{
            console.log(action)
            state.isLoading = false;
            state.products = [];
            state.error = action.error.message;
        })
        
    }

})


export default productSlice.reducer;