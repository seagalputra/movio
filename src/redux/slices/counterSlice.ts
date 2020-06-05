import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    addCounter: (state) => state + 1,
  },
})

export const { addCounter } = counterSlice.actions

export default counterSlice.reducer
