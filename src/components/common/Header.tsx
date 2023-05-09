import styled from "styled-components";
import { ArrowLeft } from "../../assets";
import { useNavigate } from "react-router-dom";
import React from "react";

export interface HeaderType {
  title: string;
  isBack: boolean;
  path?: string;
}

const Header = ({ title, isBack, path }: HeaderType) => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      {isBack && path && (
        <img src={ArrowLeft} alt={"뒤로가기"} onClick={() => navigate(path)} />
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
  z-index: 1;
  box-shadow: 0.5px 0.5px 7px rgba(0, 0, 0, 0.25);

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
