import styled from 'styled-components';

export default styled.input`
  background-color: #ecebf1;
  border-radius: 0.25rem;
  border-color: #9ca3af;
  padding-left: 5px;
  height: 45px;
  width: ${({ width }) => width || '100%'};
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border: none;
  color: ${({ color }) => color || '#737373'};
  font-weight: 600;

  &::placeholder {
    color: ${({ color }) => color || '#737373'};
  }
`;
