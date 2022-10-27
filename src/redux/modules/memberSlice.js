import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from '../../shared/request';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const initialState = {
  login: {
    nickname: '',
    password: '',
    passwordConfirm: ''
  },
  isLoading: false,
  error: null,
};

// 아이디 중복 확인
// export const checkMember = createAsyncThunk(
//   "CHECK_MEMBER",
//   async (payload, thunkAPI) => {
//     console.log(payload)

//     try {
//       const { data } = await axios.post("http://13.124.142.195/users/nickcheck", payload);
//       console.log(data)
//       return thunkAPI.fulfillWithValue(data);

//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

//회원가입
export const addMember = createAsyncThunk(
  "ADD_MEMBER",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post("api/members/signup", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 로그인
export const memberLogin = createAsyncThunk(
  'MEMBER_LOGIN',
  async (payload, thunkAPI) => {

    try {
      const config = {
        headers: {
          //웹브라우저 > 웹서버 쪽으로 요청하는 응용계층의 표현타입을 JSON으로
          'Content-Type': 'application/json',
        },

      };
      // let isDone = false;

      const { data } = await instance.post('/api/members/login', payload, config)

        .then((token) => {
          // isDone = true;
          // data = token
          // 로컬 스토리지는 키와 벨류로 이루어진 데이터를 저장할 수 있다.
          // 키에 데이터 쓰기 localStorage.setItem (https://www.daleseo.com/js-web-storage/)
          // 로컬 스토리지에 키와 벨류로 이루어진 값을 저장하겠다.
          // 키는 Authorization이라는 이름을 가지고
          // 벨류는 토큰(XML)은 authorization이라는 텍스트가 포함된 문자열을 반환하도록 요청한다.

          // instance.post가 비동기 함수인데 await를 붙이면 결과가 나올때까지 기다렸다가
          // 백엔드에서 결과가 나오면 data에 응답값을 넣어주는데
          // 무슨 이유인지는 모르겠지만 백엔드에서 응답을 주기전에 await가 리턴을 해버린다.
          // 그게 fulfilled(data)로 넘어가서 문제가 있었음
          if (token.data.success) {
            localStorage.setItem('Authorization', token.request.getResponseHeader('authorization'));
            localStorage.setItem('Refresh-Token', token.request.getResponseHeader('refresh-Token'));
            alert('로그인에 성공하였습니다!')
            // 아래 코드에 localStorage.getItem에 auth 소문자가 아니라, Authorization 해야한다.
            // 위에 저장할 때 대문자로 했으니깐
            //instance.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization');
            //instance.defaults.headers.common['Refresh-Token'] = localStorage.getItem('Refresh-Token');
            window.location.replace('/posts');//수정필요
          }
        }).catch(error => {
          alert("아이디와 비밀번호를 확인해주세요!");
        })
      //localStorage.setItem('authorization', data.request.getResponseHeader('authorization'));
      //localStorage.setItem('refresh-Token', data.request.getResponseHeader('refresh-Token'));
      // while (isDone === false);
      //return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      // alert('아이디와 비밀번호를 확인해주세요!')
      //return thunkAPI.rejectWithValue(error);
    }
  }
);

export const checkOut = createAsyncThunk(
  "CHECKOUT",
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          //웹브라우저 > 웹서버 쪽으로 요청하는 응용계층의 표현타입을 JSON으로
          'Content-Type': 'application/json',

          // 서버의 logout 함수를 살펴보면, Request Header부분에 'Refresh-Token'을
          // 확인하여, 해당토큰이 유효한지 보고 로그아웃을 결정한다.
          // 토큰이 유효하면, 해당 사용자의 토큰을 삭제한다.
          // 서버에서 넘어온 토큰에 'Bearer '이 있다.
          'Authorization': localStorage.getItem('Authorization'),
          'Refresh-Token': localStorage.getItem('Refresh-Token')
        },

      };
      const { data } = await instance.post("/api/auth/members/logout", payload, config);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: {
    [memberLogin.pending]: (state) => {
      state.isLoading = true;
    },

    [memberLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      //state.login = action.payload;
    },
    [memberLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default memberSlice.reducer;