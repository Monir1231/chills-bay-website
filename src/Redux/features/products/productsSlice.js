import { createSlice } from '@reduxjs/toolkit'


const  initialState = [
    {
        id:1,
        name:"monir",
        age:22
    }
]

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        addProduct:(state,action) =>{

        }
    }
})

export const { addProduct} = productSlice.actions
export default productSlice.reducer