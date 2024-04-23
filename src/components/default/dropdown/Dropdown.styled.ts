import styled from "styled-components";

interface DropdownProps {
  isOpen?: boolean;
  selectedItem?: string;
}

export const Dropdown = styled.div<DropdownProps>`
  position: relative;
  width: 100%;
  font-family: Inter;
  font-size: 11px;
  font-weight: 400;

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    outline: none;
    border: 1px solid ${(props) => (props.isOpen ? "#000000" : "#acacac")};
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    width: 100%;
    color: ${(props) => (props.selectedItem !== "카드사를 선택해주세요" ? "#000000" : "#acacac")};
  }

  ul {
    position: absolute;
    top: 110%;
    left: 0;
    width: 99%;
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid #acacac;
    border-radius: 5px;
    background-color: #fff;
    z-index: 1;
  }

  li {
    padding: 8px;
    cursor: pointer;
  }

  li:hover {
    background-color: #f5f5f5;
  }
`;
