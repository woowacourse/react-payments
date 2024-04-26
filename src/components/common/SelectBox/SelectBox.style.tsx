import styled from 'styled-components';
import { SelectButtonArrowDown, SelectButtonArrowUp } from '../../../assets';

export const SelectBoxContainer = styled.div`
  position: relative;
  user-select: none;
  -webkit-user-select: none;
`;

export const SelectButton = styled.button<{ $isValid: boolean; $isOpened: boolean; $isSelected: boolean }>`
  position: relative;
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid ${(props) => (props.$isValid ? 'var(--grey-300)' : 'var(--error)')};
  font-size: var(--font-size-md);
  color: ${(props) => (props.$isSelected ? 'var(--grey-700)' : 'var(--grey-300)')};

  &:hover {
    cursor: pointer;
  }

  &:hover,
  &:focus {
    border-color: ${(props) => (props.$isValid ? 'var(--grey-700)' : 'var(--error)')};
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url(${(props) => (props.$isOpened ? SelectButtonArrowDown : SelectButtonArrowUp)});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const SelectOptionBox = styled.ul`
  position: absolute;
  top: 37px;
  z-index: 10;
  width: 100%;

  border-radius: 2px;
  border: 1px solid var(--grey-300);
  background: var(--grey-100);
`;

export const SelectOption = styled.li<{ $isSelected: boolean }>`
  font-weight: 400;
  font-size: var(--font-size-md);
  color: var(--grey-500);
  display: block;
  padding: 9px 11px;
  background: ${(props) => (props.$isSelected ? 'var(--grey-200)' : 'var(--grey-100)')};

  &:hover,
  &:focus {
    cursor: pointer;
    background: var(--grey-200);
  }
`;
