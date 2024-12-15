import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { LoggedUser, User, RegisterUser } from '../interfaces/User';

const api = import.meta.env.VITE_API

export interface UserState {
  user: LoggedUser | null;
  token: string;
  loggedIn: boolean;
  loading: boolean;
  error: string | null;
}

interface LoginResponse {
  user: LoggedUser;
  token: string;
}

export const login = createAsyncThunk<LoginResponse, User, { rejectValue: string }>(
  'user/login',
  async (user: User, thunkAPI) => {
    try {
      const { data } = await axios.post<LoginResponse>(`${api}/users/login`, user);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

// Initial state for the user
const initialState: UserState = {
  user: null,
  token: '',
  loggedIn: false,
  loading: false,
  error: null,
};

// User slice definition
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = '';
      state.loggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.loading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.loggedIn = true;
        }
      )
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An error occurred';
      });
  },
});

// Export actions and reducer
export const { logout } = userSlice.actions;
export default userSlice.reducer;
