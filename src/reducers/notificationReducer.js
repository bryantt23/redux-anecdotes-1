import { createSlice } from '@reduxjs/toolkit'

const initialState = { text: "TODO" }

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
})

export default notificationSlice.reducer;
