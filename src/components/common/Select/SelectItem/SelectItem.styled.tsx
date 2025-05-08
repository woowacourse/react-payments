import styled from '@emotion/styled';

import { colors } from '@/styles/global';

export const StyledSelectItem = styled.li`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  height: 40px;
  padding: 10px 10px 10px 5px;

  &:hover {
    background-color: ${colors.GY1};
  }
`;
