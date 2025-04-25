import styled from '@emotion/styled';

export const SelectWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const SelectButton = styled.button`
  width: 100%;
  padding: 8px 16px;
  padding-right: 40px;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background.white};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  text-align: left;
  position: relative;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.border.hover};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.hover};
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${({ theme }) => theme.colors.border.hover};
    pointer-events: none;
  }
`;

export const DropdownList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  padding: 8px 0;
  background-color: ${({ theme }) => theme.colors.background.white};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const DropdownItem = styled.li<{ isSelected: boolean }>`
  padding: 12px 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.background.hover : theme.colors.background.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.hover};
  }
`;

export const HiddenSelect = styled.select`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
