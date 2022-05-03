import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { LABEL_PRIMARY_COLOR, ITEM_HOVER_PRIMARY_BG_COLOR } from '../../style';
import Input from './Input';

const CalendarContainer = styled.div``;

const SelectBox = styled.div``;

const SelectLayer = styled.div`
  display: ${props => (props.isShown ? 'block' : 'none')};
  width: 100%;
  margin: 16px;
`;

const SelectListWrapper = styled.div``;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding-left: 0;
`;

const Item = styled.li`
  text-align: center;
  margin: 8px 0;
  padding: 8px;
  width: 50%;
  box-shadow: 0 4px 8px -8px ${LABEL_PRIMARY_COLOR};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${ITEM_HOVER_PRIMARY_BG_COLOR};
  }
`;

function Calendar({ itemList, placeholder, setItem, dimensions, item }) {
  const [isShown, setIsShown] = useState(false);
  const handleClickBox = () => {
    setIsShown(!isShown);
  };

  const handleClickDate = selectedItem => {
    handleClickBox();
    setItem(selectedItem);
  };

  return (
    <CalendarContainer>
      <SelectBox onClick={handleClickBox}>
        <Input placeholder={placeholder} type="text" readOnly value={item} />
      </SelectBox>
      <Modal isOpen={isShown} setIsOpen={setIsShown} dimensions={dimensions}>
        <SelectLayer isShown={isShown}>
          <SelectListWrapper>
            <List>
              {itemList.map(tem => (
                <Item key={tem} onClick={() => handleClickDate(tem)}>
                  {tem}
                </Item>
              ))}
            </List>
          </SelectListWrapper>
        </SelectLayer>
      </Modal>
    </CalendarContainer>
  );
}

export default Calendar;
