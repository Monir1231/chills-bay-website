import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:"carts",
    initialState:[],
    reducers:{
        // add to carts 
        addCarts : (state,action)=>{
            // console.log(action.payload)
        const existingProducts = state.find((product)=> product.productId === action.payload.id)
        if(existingProducts){
            alert("product allRady added ")
        } else{
            state.push({
                ...action.payload,
                id:Date.now(),
                quantity:1,
                productId:action.payload.id
            })
        }


        },

        // inc 

        increaseQuantity: (state,action) =>{
            const product = state.find((product)=> product.id === action.payload)
            if(product){
                product.quantity ++
            }

        },


        // dec 

         decreaseQuantity: (state,action) =>{
             const product = state.find((product)=> product.id === action.payload)
            if(product && product.quantity > 1){
                product.quantity--
            }
        },

        // del 

        removeFromCart : (state,action) =>{
          return  state.filter((product)=>product.id != action.payload)
        }


    }
})

export const { addCarts,increaseQuantity,decreaseQuantity,removeFromCart} = cartSlice.actions
export default cartSlice.reducer