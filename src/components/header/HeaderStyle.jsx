import styled from "styled-components"
import { Link } from 'react-router-dom'

export const SHeader = styled.div`


`;
export const LoginButton = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
export const HeaderLogo = styled.div`
  /* display: flex; */
  justify-content: center;
  font-size: 22px;
  color: #ffb972;
  text-align: center;
  margin-top: 40px;
`;

export const HeaderUl = styled.ul`
  display: flex;
  list-style-type: none;
  margin-top:10px;
`;

export const HeaderLi = styled.li`
  padding: 5px 10px;
  margin: 0 3px;
  border: 2px solid #b7d0ff;
  border-radius: 50px;
  color: #abc2ec;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #b7d0ff;
    color:#fff;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: center;
`;
export const SLink = styled(Link)`
    text-decoration: none;
    color:black;
`;