import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '@sanity/client';

const sanityClient = client({
  projectId: 'kqeze5p3',
  dataset: 'production',
  useCdn: true, // turn on CDN usage to reduce latency
});

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogsData', async () => {
  const response = await sanityClient.fetch(`*[_type == "post"]`);
  return response;
});

const initialState = {
  blogs: [],
  author: null,
  loading: null,
  status: 'idle', //'idle | 'loading' | 'succeeded'| 'failed'
  error: null,
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {} = blogsSlice.actions;

export default blogsSlice.reducer;
