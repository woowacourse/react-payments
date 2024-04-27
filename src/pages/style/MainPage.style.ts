import styled from 'styled-components';
import STYLE from '../../constants/style';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 5% 0;
  width: 100vw;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  gap: 48px;
  width: 100%;
  max-width: 375px;
  height: fit-content;
  background-color: ${STYLE.COLOR.white};
`;
