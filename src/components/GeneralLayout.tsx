import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from '../GlobalStyles';

export const Container = styled.div`
  width: 382px;
  height: 700px;
  background-color: #fff;

  border-radius: 8px;
  border: 3px solid #000;
`;

export default function GeneralLayout() {
  return (
    <Container>
      <GlobalStyles />
      <Outlet />
    </Container>
  );
}
