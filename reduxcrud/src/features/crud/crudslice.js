import { createSlice } from '@reduxjs/toolkit'
import { users } from '../../data'


export const crudslice = createSlice({
    name: 'crud',
    initialState: users,
    reducers: {

        adduser: (state, action) => {

            state = state.push(action.payload)

        },
        deleteuser: (state, action) => {

            const uid = action.payload
            

            const u = state.find((user) => user.id == uid)

            if(u)
            {
                return state.filter(ele=>ele.id!=uid)
            }




            console.log(action.payload);

        }


    },
})

// Action creators are generated for each case reducer function
export const { adduser, deleteuser } = crudslice.actions

export default crudslice.reducer