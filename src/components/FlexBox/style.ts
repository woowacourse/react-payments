import styled from 'styled-components';
import * as T from './type';

export const FlexBox = styled.div<T.FlexBox>`
      display: flex;
      justify-content: ${(props) => props.justifyContent};
      align-items: ${(props) => props.alignItems};
      flex-direction: ${(props) => props.direction};
  `;
export default {};
