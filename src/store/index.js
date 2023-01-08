import { createAction, createReducer, createSlice, configureStore } from "@reduxjs/toolkit";

// export const increment = createAction('INCREMENT', () => ({
//     payload: +prompt(`Введите сумму пополнения`)
// }))
// export const decrement = createAction('DECREMENT' , () => ({
//     payload: +prompt(`Введите сумму для снятия`)
// }))

// const counterReducer = createReducer(0, (builder) => {
//     builder
//         .addCase(increment, (state, action) => {
//             state.push(action.payload)
//     })
//         .addCase(decrement, (state, action) => {
//             state.push(action.type)
//     })
// }) 

const countSlice = createSlice({
    name: '@@count',
    initialState: 0,
    reducers: {
        increment: {
            reducer: (state, action) => {
                return state + (action.payload)
            },
            prepare: () => ({
                payload: +prompt(`Введите сумму пополнения`)
            })
        },
        decrement: {
            reducer: (state, action) => {
                return state - (action.payload)
            },
            prepare: () => ({
                payload: +prompt(`Введите сумму для снятия`)
            })
        }
    }
})

export const {increment, decrement} = countSlice.actions

export const store = configureStore({
    reducer: countSlice.reducer,  
    devTools: true
})