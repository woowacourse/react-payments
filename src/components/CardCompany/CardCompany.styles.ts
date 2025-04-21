import styled from '@emotion/styled';

export const SelectWrapper = styled.div`
  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #acacac;
  border-radius: 4px;
  background-color: white;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #666;
  }
`;
