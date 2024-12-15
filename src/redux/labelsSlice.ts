import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const api = import.meta.env.VITE_API

// Define the Label type
export interface Label {
  id: number;
  name: string;
  userId: number; // Assuming labels are associated with a user
}

// Define the initial state
interface LabelsState {
  labels: Label[];
  loading: boolean;
  error: string | null;
}

const initialState: LabelsState = {
  labels: [],
  loading: false,
  error: null,
};

// Thunk to fetch labels
export const fetchLabels = createAsyncThunk<Label[], void, { rejectValue: string }>(
  'labels/fetchLabels',
  async (userId, thunkAPI, ) => {
    try {
      const { data } = await axios.get<Label[]>(`${api}/labels/user/${userId}`);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to fetch labels'
      );
    }
  }
);

// Slice definition
const labelsSlice = createSlice({
  name: 'labels',
  initialState,
  reducers: {
    // Define additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLabels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLabels.fulfilled, (state, action: PayloadAction<Label[]>) => {
        state.loading = false;
        state.labels = action.payload;
      })
      .addCase(fetchLabels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An error occurred while fetching labels';
      });
  },
});

// Export the reducer
export default labelsSlice.reducer;

// Export selectors (optional, for easy state access)
export const selectLabels = (state: { labels: LabelsState }) => state.labels.labels;
export const selectLabelsLoading = (state: { labels: LabelsState }) => state.labels.loading;
export const selectLabelsError = (state: { labels: LabelsState }) => state.labels.error;
