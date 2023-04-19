import styled from 'styled-components';

const InputBox = styled.div<{ width?: string }>`
  display: flex;
  height: 45px;
  width: ${({ width }) => width || '100%'};

  padding: 12px;

  box-sizing: border-box;
  background: #ecebf1;
  border-radius: 7px;
`;

export default InputBox;
