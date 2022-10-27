import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,

});
// 모듈에 주소로 붙일 때 instance로 저장

export default instance;