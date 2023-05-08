import styled from 'styled-components';

import { COLOR } from '../../constants/card';

export const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 50px;

  height: 100%;
`;

export const Paragraph = styled.p`
  font-size: xx-large;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${COLOR.TOSS_GREY};
`;
