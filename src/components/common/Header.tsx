import styled from "styled-components";
import { ArrowLeft } from "../../assets";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
  goToMainPage: boolean;
}

const Header = (props: HeaderProps) => {
  return (
    <HeaderWrapper>
      {props.goToMainPage && (
        <Link to="/">
          <img src={ArrowLeft} alt={"메인으로 가기"} />
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
