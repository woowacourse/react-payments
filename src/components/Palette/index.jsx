import PropTypes from 'prop-types';
import ColorPicker from './ColorPicker';
import * as styled from './index.styled';
import { useCardFormContext, ACTION } from '../../context/card-form-context';

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

const Palette = ({ closeModal }) => {
  const { dispatch } = useCardFormContext();
  const onClickCardSelector = (color, name) => () => {
    dispatch({
      type: ACTION.CARD_TYPE,
      data: { cardType: { color, name } },
    });
    closeModal();
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
  closeModal: PropTypes.func,
};

export default Palette;
