import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
}

const RootLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
`;

export default App;
