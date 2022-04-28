import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Input } from './styled';
import Modal from './Modal';
import { LABEL_PRIMARY_COLOR, ITEM_HOVER_PRIMARY_BG_COLOR } from '../../style';

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

// TODO: 네이밍
function Calendar({ items, placeholder, setItem, dimensions }) {
  const inputRef = useRef(null);
  const [isShown, setIsShown] = useState();
  const handleClickBox = () => {
    setIsShown(!isShown);
  };

  const handleClickDate = m => {
    handleClickBox();
    inputRef.current.value = m;

    setItem(m);
  };

  return (
    <CalendarContainer>
      <SelectBox onClick={handleClickBox}>
        <Input ref={inputRef} disabled placeholder={placeholder} type="text" />
      </SelectBox>
      <Modal isOpen={isShown} setIsOpen={setIsShown} dimensions={dimensions}>
        <SelectLayer isShown={isShown}>
          <SelectListWrapper>
            <List>
              {items.map(m => (
                <Item key={m} onClick={() => handleClickDate(m)}>
                  {m}
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
