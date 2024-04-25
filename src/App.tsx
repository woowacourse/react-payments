import styled from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { router } from './router';

export const Container = styled.div`
  width: 382px;
  height: 700px;
  background-color: #fff;

  border-radius: 8px;
  border: 3px solid #000;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
