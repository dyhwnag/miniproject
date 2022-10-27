import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMember } from '../redux/modules/memberSlice';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';



const Signup = () => {
  const [nickname, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmitSignUpHandler = (e) => {
    e.preventDefault();

    if (nickname === '') return alert('아이디를 입력해주세요.');

    if (password === '') return alert('비밀번호를 입력해주요.');

    if (passwordConfirm === '') return alert('비밀번호 확인을 입력해주세요.');

    if (password !== passwordConfirm) return alert('비밀번호가 일치하지 않습니다.');




    dispatch(addMember({
      nickname,
      password,
      passwordConfirm
    }));
    alert('가입이 완료 되었습니다!')
    navigate('/')
  }
  return (
    <Layout>
      <LoginContainer>
        <div>

          <TextStyle>회원가입</TextStyle>
          <FormStyle onSubmit={onSubmitSignUpHandler}>
            <InputBox>
              <InputStyle1 type='text' value={nickname}
                onChange={(e) => { setNickName(e.target.value) }} placeholder='아이디를 입력해주세요.' />
              <CheckButton>중복확인</CheckButton>
            </InputBox>
            <InputStyle type='password' value={password}
              onChange={(e) => { setPassword(e.target.value) }} placeholder='비밀번호를 입력해주세요.' />
            <InputStyle type='password' value={passwordConfirm}
              onChange={(e) => { setPasswordConfirm(e.target.value) }} placeholder='비밀번호를 다시 입력해주세요.' />
            <ButtonStyle>가입하기</ButtonStyle>
          </FormStyle>
        </div>
      </LoginContainer>
    </Layout>
  )
}

export default Signup;

const CheckButton = styled.button`
  width: 70px;
  height: 35px;
  border: none;
  background-color: #508dff;
  color: #fff;
  border-radius:15px;
  margin-left: 10px;
  
  cursor: pointer;
  &:hover {
    background-color: #003aa7;
  }
`

const InputBox = styled.div`
  display: flex;
    width: 500px;
  
`
const InputStyle1 = styled.input`
  border: 1px solid #b3b3b3;
  margin-bottom: 30px;
  height: 30px;
  outline: none;
  width: 295px;
`

const ButtonStyle = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  background-color: #508dff;
  color: #fff;
  border-radius:15px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: #003aa7;
  }
`;

const TextStyle = styled.div`
  font-size:20px;
  font-weight: 600;
  color: #005db4;
  margin-bottom: 30px;
`;

const InputStyle = styled.input`
  border: 1px solid #b3b3b3;
  margin-bottom: 30px;
  height: 30px;
  outline: none;
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #000000;
  margin-bottom: 30px;
  width: 300px;
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #a8a8a8; */
  width: 500px;
  height: 400px;
  border-radius: 10px;
  text-align: center;
`;
