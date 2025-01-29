import { configureStore } from '@reduxjs/toolkit'
import crudReducer from '../features/crud/crudslice'

export const store = configureStore({
    reducer: {
        crud: crudReducer
    },
})