import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

export default function CardListLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 376px;
  height: 100%;
  padding: 40px 28px;
  border: 1px solid #dddcdc;
  overflow: auto;
`;
