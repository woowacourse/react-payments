import styled from 'styled-components/macro';

const Root = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 375px;
  height: 700px;
`;

const NavigationBar = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 22px 24px;
`;

const BackButton = styled.img`
  postion: absolute;
`;

export { Root, NavigationBar, BackButton };
