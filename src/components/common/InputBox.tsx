import styled from 'styled-components';

const InputBox = styled.div<{ width?: string; isError?: boolean }>`
  display: flex;
  height: 45px;
  width: ${({ width }) => width || '100%'};

  padding: 12px;

  box-sizing: border-box;
  background: var(--blue-grey-color);

  border: ${({ isError }) => (isError ? '1px solid #ec2f1b' : 'none')};
  border-radius: 7px;
`;

export default InputBox;
