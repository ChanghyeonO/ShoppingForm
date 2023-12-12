import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 700px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #eee;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 200px;
`;

const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    background-color: #1a6dff;
    color: #fff;
  }
`;

export const MyShoppingMallLink = styled(LinkStyle)``;

export const ChangePasswordLink = styled(LinkStyle)``;

export const RemoveAccountLink = styled(LinkStyle)``;
