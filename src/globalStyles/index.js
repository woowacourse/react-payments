import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    background-color: #F5F5F5;
    color: #555;  
  }

  input {
    font-size: 16px;
    color: #04c09e;
    font-weight: 600;
  }
`;
