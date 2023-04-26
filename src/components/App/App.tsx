import { BrowserRouter } from 'react-router-dom';

import * as styled from './App.styled';
import Header from '../Header/Header';
import CardPages from '../Pages/CardPages/CardPages';

const App = () => {
  return (
    <styled.App>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <CardPages />
      </BrowserRouter>
    </styled.App>
  );
};

export default App;
