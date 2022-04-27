import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Input } from './common';

const CalendarContainer = styled.div`
  position: relative;
`;

const SelectBox = styled.div`
  border: 1px solid #000;
`;

const SelectLayer = styled.div`
  display: ${props => (props.isShown ? 'block' : 'none')};
  position: absolute;
`;

const SelectListWrapper = styled.div``;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Item = styled.li``;

// const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// TODO: 네이밍
function Calendar({ items, placeholder, setItem }) {
  const inputRef = useRef(null);
  const [isShown, setIsShown] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const handleClickBox = () => {
    setIsShown(!isShown);
  };

  const handleClickDate = m => {
    setSelectedDate(m);
    handleClickBox();
    inputRef.current.value = m;

    setItem(m);
  };

  return (
    <CalendarContainer>
      <SelectBox onClick={handleClickBox}>
        <Input ref={inputRef} disabled placeholder={placeholder} type="text" />
      </SelectBox>
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
    </CalendarContainer>
  );
}

export default Calendar;
