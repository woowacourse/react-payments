import styled from 'styled-components';
import Router from './Router';

function App() {
  return (
    <AppWrapper>
      <Router />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  min-height: 731px;
`;
