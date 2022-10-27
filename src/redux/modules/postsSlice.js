import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from '../../shared/request';
import axios from "axios";

const initialState = {
  detail: {
    title: '',
    content: '',
    imgUrl: '',
    category: ''
  },
  // posts 추가 @@
  posts: [
    {
      title: '',
      content: '',
      imgUrl: '',
      category: ''
    }
  ],
  isLoading: false,
  error: null,
}



// 전체 게시글 조회
export const __getPosts = createAsyncThunk(
  "GET_POSTS",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const { data } = await axios.get(`http://localhost:3001/posts`, payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// 게시글 상세페이지
export const __getPostDetail = createAsyncThunk(
  "GET_POST_DETAIL",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/posts/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// 게시글 수정
export const __putPostDetail = createAsyncThunk(
  "PUT_POST_DETAIL",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.put(`http://localhost:3001/posts/${payload.id}`, payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// 게시글 삭제
export const __deletePostDetail = createAsyncThunk(
  "DELETE_POST_DETAIL",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/posts/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// 게시글 작성 @@
export const __addPosts = createAsyncThunk(
  'ADD_POST',
  async (payload, thunkAPI) => {
    console.log('payload', payload)
    try {
      // const config = {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': localStorage.getItem('Authorization')
      //   }
      // }
      await axios.post(`http://localhost:3001/posts/${payload}`, payload); //post('api/posts', payload)
      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  })

export const postsSlice = createSlice({ // 리듀서를 만들어주는 역할
  name: "posts", // 모듈이름
  initialState, // 초기상태값
  reducers: {}, // 자동으로 만들어지는 리듀서
  extraReducers: { // 직접 커스텀으로 만드는 리듀서

    // 전제 게시글 조회
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 상세 페이지 조회
    [__getPostDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPostDetail.fulfilled]: (state, action) => {

      state.isLoading = false;
      state.detail = action.payload;

    },
    [__getPostDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 게시글 수정
    [__putPostDetail.pending]: (state) => {
      state.isLoading = true;
    },

    [__putPostDetail.fulfilled]: (state, action) => {
      state.isLoading = false
      state.detail = action.payload

    },

    [__putPostDetail.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    // 게시글 삭제
    [__deletePostDetail.pending]: (state) => {
      state.isLoading = true
    },

    [__deletePostDetail.fulfilled]: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload)

    },

    [__deletePostDetail.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    // 게시글 작성 @@
    [__addPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPosts.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.posts.push(action.payload);
    },
    [__addPosts.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
  },

})

export default postsSlice.reducer;