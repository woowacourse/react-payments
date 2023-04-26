import styled from 'styled-components';
import { COLOR } from '../../constants/cardInfo';

export const App = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 28px 24px;

  background-color: ${COLOR.WHITE};

  overflow: auto;
`;
