import styled from '@emotion/styled';
import { SelectBoxProps } from './SelectBox';

const StyledSelectBox = styled.select<SelectBoxProps>`
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border-radius: 2.66px;
  border: 1px solid #acacac;

  :focus {
    outline: none;
    border: 1px solid #333333;
  }
`;

export default StyledSelectBox;
