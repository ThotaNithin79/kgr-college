import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchStudents } from '../../api/studentApi';

export const getStudents = createAsyncThunk('students/get', async (params) => {
  const res = await fetchStudents(params);
  return res.data;
});

const studentSlice = createSlice({
  name: 'students',
  initialState: { list: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state) => { state.status = 'loading'; })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default studentSlice.reducer;
