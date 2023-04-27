import styled from 'styled-components';

import { FlexBoxStyleProps } from './type';

export const FlexBox = styled.div<FlexBoxStyleProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
`;

export default {};
