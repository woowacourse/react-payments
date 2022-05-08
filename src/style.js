import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb:vertical {
    background-color: #C1C1C1;
    border-radius: 5px;
  }

  #root {
    position: relative;
    background-color: #fff;
    width: 375px;
    min-width: 375px;
    height: 700px;
    position: relative;
    border-radius: 15px;
  }
`;

export const ModalContainer = styled.div`
  visibility: ${props => props.visibility};
  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;
