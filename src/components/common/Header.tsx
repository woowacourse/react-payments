import styled from "styled-components";
import { ArrowLeft } from "../../assets";
import { Link } from "react-router-dom";

interface HeaderType {
  title: string;
  isBack: boolean;
}

const Header = (props: HeaderType) => {
  return (
    <HeaderWrapper>
      {props.isBack && (
        <Link to="/">
          <img src={ArrowLeft} alt={"뒤로가기"} />
        </Link>
      )}
      <h3>{props.title}</h3>
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

export default Header;
