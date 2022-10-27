import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import posts from '../modules/postsSlice';
import comments from '../modules/commentSlice';
import members from '../modules/commentSlice';

const store = configureStore({
  reducer: { posts, comments, members },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),

});

export default store;

