import { Outlet } from 'react-router-dom';
import * as Styled from './styles/App.style';

function App() {
  return (
    <Styled.Container>
      <Outlet />
    </Styled.Container>
  );
}

export default App;
