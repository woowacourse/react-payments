import styled, { keyframes } from 'styled-components';

const bottomSheetAppear = keyframes`
    0%{
        opacity: 0;
        transform: translateY(100%);        
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
`;

const backdropAppear = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const Styled = {
  Modal: styled.dialog`
    display: grid;
    grid-template-columns: 80px 80px 80px 80px;
    justify-content: center;
    position: fixed;
    bottom: 0;
    height: 227px;
    border-radius: 10px 10px 0 0;
    border: none;
    background-color: white;
    overflow: scroll;
    animation: ${bottomSheetAppear} 0.5s ease-in;

    button {
      position: absolute;
      right: 0;
    }
  `,
  ModalBackdrop: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    animation: ${backdropAppear} 0.5s ease-in;
  `,

  ModalCloseButton: styled.button`
    width: 20px;
    height: 20px;
    border: none;
    margin: 10px;
    font-size: 16px;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
  `,
};
