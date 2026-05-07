import styled from '@emotion/styled';
import ServiceLayout from './components/Layout/ServiceLayout';

function App() {
  return (
    <RootLayout>
      <ServiceLayout />
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
