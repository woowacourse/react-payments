import styled from "@emotion/styled";
import React from "react";
import THEME from "../../../styles/theme";

interface SelectBoxProps {
  isDropdown: boolean;
  handleDropdown: React.MouseEventHandler<HTMLUListElement>;
  selected: string | undefined;
  handleSelected: React.MouseEventHandler<HTMLLIElement>;
  optionsContents: string[];
  placeholder: string;
}

const SelectBox = ({
  isDropdown,
  handleDropdown,
  selected,
  handleSelected,
  optionsContents,
  placeholder,
}: SelectBoxProps) => {
  return (
    <Select onClick={handleDropdown}>
      <Arrow isDropdown={!!isDropdown} />
      <SelectedCardWrapper>
        <SelectedCardText isSelected={!!selected}>
          {selected ? selected : placeholder}
        </SelectedCardText>
      </SelectedCardWrapper>
      {isDropdown && (
        <OptionWrapper>
          {optionsContents.map((optionContent) => (
            <Option key={optionContent} onClick={handleSelected}>
              {optionContent}
            </Option>
          ))}
        </OptionWrapper>
      )}
    </Select>
  );
};

export default SelectBox;

const Select = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  font-size: 10px;

  box-sizing: border-box;
  border-radius: 3px;
  padding: 8px;
  margin-bottom: 3px;
  border: 1px solid ${THEME.DEFAULT.grey};
`;

const SelectedCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SelectedCardText = styled.p<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  color: ${(props) => (props.isSelected ? THEME.DEFAULT.black : THEME.DEFAULT.grey)};
`;

const OptionWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 38px;
  background: ${THEME.DEFAULT.white};
  width: 100%;
  border: 1px solid ${THEME.DEFAULT.grey};
  border-radius: 5px;
  max-height: 20vh;
  overflow: scroll;
`;

const Option = styled.li`
  padding: 8px;

  &:hover {
    background: ${THEME.DEFAULT.grey};
    transition: 0.1s;
  }
`;

const Arrow = styled.div<{ isDropdown: boolean }>`
  position: absolute;
  top: 40%;
  right: 10px;
  transform: translate(-50%, -50%);
  width: 5px;
  height: 5px;
  box-sizing: border-box;
  border-top: 2px solid ${THEME.DEFAULT.black};
  border-right: 2px solid ${THEME.DEFAULT.black};
  transform: ${(props) => (props.isDropdown ? "rotate(135deg)" : "rotate(315deg)")};
  transition: 0.3s;
`;
