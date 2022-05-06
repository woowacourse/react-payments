import { useState } from 'react';
import PropTypes from 'prop-types';
import ColorPicker from './ColorPicker';
import * as styled from './index.styled';
import { useCardFormContext } from '../../context/card-form-context';

const cardList1 = [
  { color: 'red', name: '포코 카드' },
  { color: 'blue', name: '도리 카드' },
  { color: 'green', name: '호프 카드' },
  { color: 'purple', name: '공원 카드' },
];

const cardList2 = [
  { color: 'mint', name: '콜라 카드' },
  { color: 'pink', name: '블링 카드' },
  { color: 'orange', name: '태태 카드' },
  { color: 'yellow', name: '샐리 카드' },
];

const Palette = () => {
  const { dispatch } = useCardFormContext();
  const onClickCardSelector = (color, name) => () => {
    dispatch({
      type: 'complete-select-cardType',
      data: { cardType: { color, name } },
    });
  };

  return (
    <styled.Container>
      <styled.ColorPickerContainer>
        {cardList1.map(({ color, name }) => (
          <ColorPicker
            color={color}
            name={name}
            key={name}
            onClick={onClickCardSelector(color, name)}
          />
        ))}
      </styled.ColorPickerContainer>
      <styled.ColorPickerContainer>
        {cardList2.map(({ color, name }) => (
          <ColorPicker
            color={color}
            name={name}
            key={name}
            onClick={onClickCardSelector(color, name)}
          />
        ))}
      </styled.ColorPickerContainer>
    </styled.Container>
  );
};

Palette.propTypes = {
  onClickCardSelector: PropTypes.func,
};

export default Palette;
