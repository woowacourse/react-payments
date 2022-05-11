import styled from 'styled-components';

import FlexCenterStyled from '../../../components/FlexCenter/style';

export const AddButtonStyled = styled(FlexCenterStyled)`
  cursor: pointer;
  width: 238px;
  height: 160px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: var(--add-button-background-color);
`;

export const PlusStyled = styled.p`
  font-size: 30px;
  color: var(--card-alias-bold-color);
`;
