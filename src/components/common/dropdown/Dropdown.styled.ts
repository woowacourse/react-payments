import styled from 'styled-components';

interface OptionProps {
  $show: boolean;
}

interface SelectedTextProps {
  $value: string;
}

export const SelectBox = styled.div<OptionProps>`
  position: relative;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: #ffffff;
  align-self: center;
  border: 1px solid ${props => (props.$show ? 'black' : '#acacac')};
  cursor: pointer;
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectedText = styled.span<SelectedTextProps>`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  color: ${props => (props.$value ? 'black' : '#acacac')};
`;

export const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 45px;
  left: 0;
  width: 100%;
  overflow: hidden;

  border-radius: 8px;
  background-color: white;
  color: black;
  border: 1px solid #acacac;
`;

export const Option = styled.li`
  font-size: 14px;
  padding: 12px;
  color: #4f4f4f;
  transition: background-color 0.1s ease-in;
  &:hover {
    background-color: rgba(200, 200, 200, 0.4);
  }
`;
