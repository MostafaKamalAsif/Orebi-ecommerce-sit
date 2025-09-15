import { configureStore } from '@reduxjs/toolkit'
import AddToCart  from './Slices/AddToCart'


export default configureStore({
  reducer: {
    addcart: AddToCart,
    
  },
})