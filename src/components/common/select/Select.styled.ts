import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  height: 36px;
  padding: 8px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #acacac;

  option[value=''][disabled] {
    display: none;
  }
`;
