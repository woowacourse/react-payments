import styled from "styled-components";
import { ArrowLeft } from "../../assets";

interface HeaderType {
  title: string;
  isBack?: boolean;
}

const Header = (props: HeaderType) => {
  return (
    <HeaderWrapper>
      {props.isBack && <img src={ArrowLeft} alt={"뒤로가기"} />}
      <h3>{props.title}</h3>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;

  background-color: pink;

  position: fixed;
  top: 0;

  & > h3 {
    font-size: 16px;
    color: #383838;
  }
`;

export default Header;
