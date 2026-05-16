import styled from '@emotion/styled';

const Button = styled.button`
  border: 0;
  border-radius: 8px;
  background: var(--color-card-background);
  color: var(--color-white);
  font-size: 14px;
  font-weight: 700;
  height: 52px;

  &:hover {
    cursor: pointer;
  }
`;

export default Button;
