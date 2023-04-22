import styled from 'styled-components';

const InputSeparator = styled.span<{ isActive?: boolean }>`
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 18px;
  color: var(--grey-color);

  padding: 0.8rem 0;
`;

export default InputSeparator;
