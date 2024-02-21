import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
  },
  reducers: {
    addNews: (state, action) => {
      state.news = action.payload;
    },
    // Add other reducer cases if needed
  },
});

export const { addNews } = newsSlice.actions;
export default newsSlice.reducer;