import styled from "@emotion/styled";

export const Trigger = styled.button`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  border: 1px solid rgba(172, 172, 172, 1);
  border-radius: 6px;
  background: white;
  cursor: pointer;
  font-size: 14px;
  color: rgba(172, 172, 172, 1);
`;

export const DropdownList = styled.ul`
  width: 100%;
  border: 1px solid #ACACAC;
  border-radius: 6px;
  background: white;
  list-style: none;
  padding: 0;
  margin: 4px 0 0 0;
`;

export const DropdownItem = styled.li`
  padding: 12px 16px;
  font-size: 14px;
  cursor: pointer;
`;
