import { configureStore } from '@reduxjs/toolkit'
import puppiesReducer from '../redux/slices/puppiesSlice'
import pricingReducer from '../redux/slices/pricingSlice'
import userReducer from '../redux/slices/userSlice'
import registerReducer from '../redux/slices/registerSlice'

export const store = configureStore({
  reducer: {
    puppies: puppiesReducer,
    pricing: pricingReducer,
    user: userReducer,
    regInput: registerReducer,
  },
})