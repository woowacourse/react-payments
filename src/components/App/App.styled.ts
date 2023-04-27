import styled from 'styled-components';

import { COLOR } from '../../constants/cardInfo';

export const App = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 28px 28px;

  background-color: ${COLOR.WHITE};

  overflow: auto;

  @media (min-width: 992px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`;
