import styled from '@emotion/styled';
import { COLORS, BRAND_COLORS } from 'styles/theme';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 20%;
  height: 100%;
  color: ${({ inputLength, maxLength }) =>
    inputLength >= maxLength ? BRAND_COLORS.danger : COLORS.dorado};
  text-align: right;
  font-size: 0.75rem;
  white-space: nowrap;
`;

export default Container;
