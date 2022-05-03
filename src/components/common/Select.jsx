import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Input } from './styled';
import Modal from './Modal';
import { LABEL_PRIMARY_COLOR, ITEM_HOVER_PRIMARY_BG_COLOR } from '../../style';

const SelectContainer = styled.div``;

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

function Select({ items, placeholder, setItem, dimensions }) {
  const inputRef = useRef(null);
  const [isShown, setIsShown] = useState(false);

  const handleClickBox = () => {
    setIsShown(!isShown);
  };

  const handleClickItem = item => {
    handleClickBox();
    inputRef.current.value = item;

    setItem(item);
  };

  return (
    <SelectContainer>
      <SelectBox onClick={handleClickBox}>
        <Input ref={inputRef} disabled placeholder={placeholder} type={'text'} />
      </SelectBox>
      <Modal isOpen={isShown} setIsOpen={setIsShown} dimensions={dimensions}>
        <SelectLayer isShown={isShown}>
          <SelectListWrapper>
            <List>
              {items.map(item => (
                <Item key={item} onClick={() => handleClickItem(item)}>
                  {item}
                </Item>
              ))}
            </List>
          </SelectListWrapper>
        </SelectLayer>
      </Modal>
    </SelectContainer>
  );
}

export default Select;
