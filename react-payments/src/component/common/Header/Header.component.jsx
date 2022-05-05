import styled from "styled-components";

const HeaderBox = styled.header`
  display: flex;
  gap: 25px;
  align-items: center;
`;

const Header = ({ children }) => {
  return <HeaderBox>{children}</HeaderBox>;
};

export default Header;
