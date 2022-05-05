import React from 'react';
import styled from 'styled-components';
import { HiOutlinePlus } from 'react-icons/hi';
import { ADD_CARD_ITEM_BG_COLOR } from '../../style';

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 130px;
  padding: 16px;
  background-color: ${ADD_CARD_ITEM_BG_COLOR};
  border-radius: 5px;
  margin: 10px 0 0;
  cursor: pointer;

  &:hover {
    background-color: ${ADD_CARD_ITEM_BG_COLOR}cc;
  }
`;

function AddCardItem() {
  const handleClick = () => {
    // TODO: 카드 추가 폼으로 이동
    alert('^^');
  };

  return (
    <CardBox onClick={handleClick}>
      <HiOutlinePlus size={30} />
    </CardBox>
  );
}

export default AddCardItem;
