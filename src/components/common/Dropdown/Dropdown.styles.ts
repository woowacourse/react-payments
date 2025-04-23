import styled from '@emotion/styled';

interface DropdownButtonProps<T> {
  isOpen: boolean;
  selectedValue: T | null;
}

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled.p<DropdownButtonProps<string>>`
  ${(props) => (props.isOpen ? `border: 1px solid #000` : `border: 1px solid #acacac`)};
  border-radius: 4px;
  padding: 14px 10px;
  width: 100%;
  ${(props) => (props.selectedValue ? `color: #000` : `color: #acacac`)};
  font-size: 13px;
  cursor: pointer;
  &::placeholder {
    color: #acacac;
  }
  &:focus-visible {
    outline: none;
    border-color: #000;
  }
`;

export const DropdownItemList = styled.ul<{ isOpen: boolean }>`
  ${(props) => (props.isOpen ? `border: 1px solid #acacac` : `border: 0px`)};
  border-radius: 4px;
  width: 100%;
  color: #acacac;
  position: absolute;
  top: 52px;
  overflow-y: scroll;

  max-height: ${(props) => (props.isOpen ? '222px' : '0')};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease,
    border 0.2s ease;
`;

export const DropdownItem = styled.li`
  border-bottom: 1px solid #acacac;
  width: 100%;
  color: #acacac;
  &:last-of-type {
    border-bottom: none;
  }
`;

export const DropdownItemButton = styled.button`
  color: #acacac;
  width: 100%;
  height: 100%;
  padding: 14px;
  background-color: #fff;
  border: none;
  cursor: pointer;
  text-align: left;
  color: #000;
  &:hover {
    background-color: #f0f0f0;
  }
`;
