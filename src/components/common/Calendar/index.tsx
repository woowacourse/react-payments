import React, { useState } from "react";

import Modal from "../Modal";
import Input from "../Input";
import { Span } from "../styled";
import {
  CalendarContainer,
  Item,
  List,
  SelectLayer,
  SelectListWrapper,
} from "./styled";

interface CalendarProps {
  itemList: string[];
  placeholder: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;
  dimensions: {
    width: number;
    height: number;
  };
  item: string;
}

function Calendar({
  itemList,
  placeholder,
  setItem,
  dimensions,
  item,
}: CalendarProps) {
  const [isShown, setIsShown] = useState(false);
  const handleClickBox = () => {
    setIsShown((prev) => !prev);
  };

  const handleClickDate = (selectedItem: string) => {
    handleClickBox();
    setItem(selectedItem);
  };

  return (
    <CalendarContainer>
      <Span onClick={handleClickBox} data-testid="date">
        <Input placeholder={placeholder} type="text" readOnly value={item} />
      </Span>
      <Modal isOpen={isShown} setIsOpen={setIsShown} dimensions={dimensions}>
        <SelectLayer isShown={isShown}>
          <SelectListWrapper>
            <List>
              {itemList.map((tem) => (
                <Item
                  key={tem}
                  onClick={() => handleClickDate(tem)}
                  data-testid="item"
                >
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
