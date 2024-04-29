import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
  margin-bottom: 45px;

  width: 100%;
`;

export const CardContainer = styled.div<{ $backgroundColor: string; $padding: string }>`
  background-color: ${(props) =>
    props.$backgroundColor !== '' ? props.$backgroundColor : '#333333'};
  width: 212px;
  height: 132px;
  padding: ${(props) => (props.$padding ? props.$padding : '0')};
  border-radius: 4px;
  position: relative;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
`;
