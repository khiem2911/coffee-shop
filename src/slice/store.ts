import { CartSlice } from "."
import {configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook,useDispatch,useSelector} from 'react-redux'

export const store  = configureStore({
    reducer:{
        cart:CartSlice.reducer
    }
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
