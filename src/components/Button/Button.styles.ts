import styled from '@emotion/styled';

export const StyledButton = styled.button<{ borderRadius?: string }>`
  width: 100%;
  height: 50px;
  border: none;
  background: #333333;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border-radius: ${(props) => props.borderRadius ?? '0'};
`;
