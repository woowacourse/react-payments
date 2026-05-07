import styled from '@emotion/styled';

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DropdownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
  background-color: #ffffff;
  border: 1px solid #acacac;
  border-radius: 2px;
  font-size: 11px;
  font-weight: 400;

  &:hover {
    border-color: #000000;
  }

  &:focus {
    border-color: #000000;
  }
`;

export const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 99%;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  border: 1px solid #acacac;
  border-radius: 2px;
  list-style: none;
`;

export const DropdownItem = styled.li`
  padding: 8px;
  font-size: 11px;
  color: #4f4f4f;
  background-color: #ffffff;

  &:hover {
    background-color: #acacac;
  }
`;
