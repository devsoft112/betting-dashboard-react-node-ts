import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../types';

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk('user/loginUser', async (credentials: { username: string; password: string; }) => {
  const response = await axios.post('/auth/login', credentials);
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to login';
      });
  },
});

export default userSlice.reducer;
