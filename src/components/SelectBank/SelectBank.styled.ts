import styled from 'styled-components';

export const SelectBank = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
`;

export const Banks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 16px;
  grid-column-gap: 26px;
  max-width: 600px;
`;

export const Bank = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  transition: ease-in-out 0.1s;
  cursor: pointer;
  &:hover {
    background-color: rgba(1, 1, 1, 0.2);
  }
`;

export const Icon = styled.div`
  margin-bottom: 10px;
`;

export const Name = styled.div`
  font-size: 13px;
  color: #525252;
`;
