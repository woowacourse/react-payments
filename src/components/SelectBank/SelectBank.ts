import styled from 'styled-components';

export const SelectBank = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 227px;

  z-index: 1;

  background-color: white;
`;

export const Banks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 26px;
  grid-column-gap: 36px;

  padding: 34px 50px 40px 50px;

  width: 100%;
  max-width: 600px;
`;

export const Bank = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
`;

export const Icon = styled.div`
  margin-bottom: 10px;
`;

export const Name = styled.div`
  font-size: 13px;
  color: #525252;
`;
