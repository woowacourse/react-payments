import styled from "styled-components";
import { ArrowLeft } from "../../assets";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ROUTER_PATH } from "../../router/path";

export interface HeaderType {
  title: string;
  isBack: boolean;
}

const Header = ({ title, isBack }: HeaderType) => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      {isBack && (
        <img
          src={ArrowLeft}
          alt={"뒤로가기"}
          onClick={() => navigate(ROUTER_PATH.MyCard)}
        />
      )}
      <h3>{title}</h3>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;

  padding-left: 40px;
  background: white;

  position: fixed;
  top: 0;

  & > h3 {
    margin-left: 10px;
    font-size: 16px;
    color: #383838;
  }

  & > a {
    font-size: 0;
  }
`;

export default React.memo(Header);
