import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../Redux/features/products/productsSlice'
import cartsReducer from '../Redux/features/carts/cartSlice'

const store = configureStore({
  reducer: {
    products:productReducer,
    carts: cartsReducer
  },
})

export default store