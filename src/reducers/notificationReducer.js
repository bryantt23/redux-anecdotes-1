import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const hideNotificationWithTimeout = createAsyncThunk(
  "notification/hideAfterTimeout",
  async (timeout, { dispatch }) => {
    await new Promise(resolve => setTimeout(resolve, timeout))
    dispatch(hideNotification())
  }
)

const initialState = { text: "TODO", show: false }

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action) {
      const content = action.payload
      state.text = content;
      state.show = true;
    },
    hideNotification(state, action) {
      state.show = false;
    }
  }
})

export const { showNotification, hideNotification } = notificationSlice.actions;
export const notificationActions = { showNotification, hideNotificationWithTimeout };
export default notificationSlice.reducer;