

import { createSlice } from '@reduxjs/toolkit'



export const AddToCart = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addtocart: (state,action) => {
         
      state.value.push(action.payload);

      let alldata=state.value.find(item=>item.title===action.payload.title)
        if (alldata) {
            alldata.quantity += 1;
        }
      else{
        state.value.push({...action.payload,quantity:1})
      }
      
      
      
   
},
  },
})

// Action creators are generated for each case reducer function
export const { addtocart } = AddToCart.actions

export default AddToCart.reducer