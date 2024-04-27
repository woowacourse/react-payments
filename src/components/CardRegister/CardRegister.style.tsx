import styled from 'styled-components';

export const AppLayout = styled.main`
  padding: 77px 0;
  max-width: 375px;
  margin: auto;
`;

export const CardPreviewBox = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CardForm = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 45px;

  & > div {
    position: relative;
    animation: fade-in 1s;
  }
`;

export const CardFormSubmitButton = styled.button`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 52px;
  background: var(--grey-600);
  color: var(--grey-200);
  font-weight: 700;
  text-align: center;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    background: var(--grey-500);
  }
`;
