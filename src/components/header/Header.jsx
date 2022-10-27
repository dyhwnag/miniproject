import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SHeader,
  LoginButton,
  HeaderLogo,
  HeaderUl,
  HeaderLi,
  HeaderMenu
} from './HeaderStyle';
import { useDispatch } from 'react-redux';
import { checkOut } from '../../redux/modules/memberSlice';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const token = localStorage.getItem("Authorization");

  const logOut = () => {

    // 체크아웃은 payload가 필요없다.
    dispatch(checkOut({}))
    localStorage.clear();
    alert("로그아웃 되었습니다.")
    navigate('/')

  }

  // const [authenticate, setAuthencicate] = useState(false);
  const CategoryList = ['서울', '경기도', '강원도', '충청도', '전라도', '경상도', '제주도'];
  return (
    <SHeader>

      {/* <LoginButton onClick={logOut}>
        <div>로그아웃</div>
      </LoginButton> */}

      {!token ?
        (<LoginButton onClick={() => navigate('/')}>
          <div
            style={{
              color: "#fff",
              background: "#508dff",
              borderRadius: "3px",
              padding: "5px 10px",
              fontWeight: "600",
              marginTop: "15px",
              marginRight: "10px"
            }}
          >로그인</div>
        </LoginButton>)
        :
        (<LoginButton onClick={logOut}>
          <div style={{
            color: "#fff",
            background: "#508dff",
            borderRadius: "3px",
            padding: "5px 10px",
            fontWeight: "600",
            marginTop: "15px",
            marginRight: "10px"
          }}>로그아웃</div>
        </LoginButton>)}


      {/* <LoginButton onClick={logOut}>
        
        <div><i className='fa-solid fa-user'></i></div>
        <div>로그아웃</div>
      </LoginButton> */}
      <HeaderLogo>
        <img className="phoneImage" src="/tt.png" style={{
          width: "250px",
          display: "block",
          margin: "0 auto"
        }} />
        <h3 style={{
          margin: "15px 0",
        }}>여행 어디로가지?</h3>
      </HeaderLogo>
      <HeaderMenu>
        <HeaderUl>
          {CategoryList.map(menu => <HeaderLi key={menu}>{menu}</HeaderLi>)}
        </HeaderUl>
        {/* <div>
          <input type='text' />
        </div> */}
      </HeaderMenu>

    </SHeader>
  )
}
export default Header