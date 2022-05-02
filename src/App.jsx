import { createGlobalStyle } from 'styled-components';
import CardAddPage from './pages/CardAddPage';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    background-color: #e5e5e5;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  #root {
    background-color: #fff;
    width: 375px;
    min-width: 375px;
    height: 700px;
    position: relative;
    border-radius: 15px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <CardAddPage />
      </div>
    </>
  );
}

export default App;
