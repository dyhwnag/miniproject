import styled from 'styled-components';

export const DetailUpdateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border:2px solid #0065b8;
  border-radius: 5px;
  width: 900px;
  height: 500px;
`;

export const ImageBox = styled.input`

`;

export const FormBox = styled.div`
  width: 300px;
  height: 250px;
  margin-bottom: 120px;
`;

export const InputStyle = styled.input`
  width: 290px;
  height: 20px;
  border: 1px solid #0065b8;
  outline-color: #0065b8;
`;

export const TextareaStyle = styled.textarea`
  width: 290px;
  height: 100px;
  border: 1px solid #0065b8;
  outline-color: #0065b8;
`;

export const ButtonBox = styled.div`
  width: 295px;
  margin-top: 10px;
  margin-right: 5px;
  display: flex;
  justify-content: end;
`;

export const TextStyle = styled.h3`
  color:#0065b8;
`;

export const UpdateButton = styled.button`
  
  width: 100px;
  height: 50px;
  cursor: pointer;
  color: #0065b8;
  border: 1px solid #0065b8;
  &:hover{
    background-color: #0065b8;
    color: #fff
  }
`;

export const ImageButton = styled.button`
  width: 100px;
  height: 50px;
  margin-right: 10px;
  cursor: pointer;
  color: #0065b8;
  border: 1px solid #0065b8;
  &:hover{
    background-color: #0065b8;
    color: #fff
  }
`;

export const Sselect = styled.select`
  width: 300px; 
  height: 25px;
  color: #0065b8;
  border: 1px solid #0065b8;
  outline: #0065b8;
  font-family: inherit;
  margin-top: 20px;
  border-radius: 0px;
  -webkit-appearance: none;
  -moz-appearance: none;appearance: none;

`;