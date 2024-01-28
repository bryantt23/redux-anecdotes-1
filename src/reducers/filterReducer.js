import { createSlice } from '@reduxjs/toolkit'

const initialState = { filterText: "" }

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterAnecdote(state, action) {
      const content = action.payload
      state.filterText = content
    },
  },
})

export const { filterAnecdote } = filterSlice.actions
export default filterSlice.reducer;
