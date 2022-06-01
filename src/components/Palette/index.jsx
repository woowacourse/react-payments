import PropTypes from 'prop-types';
import ColorPicker from './ColorPicker';
import * as Styled from './index.styled';
import { CARD_TYPE } from '../../constant';
import { useCardFormContext, ACTION } from '../../context/card-form-context';

const CARD_LIST1 = ['롯데카드', '삼성카드', 'NH농협카드', '신한카드'];
const CARD_LIST2 = ['현대카드', '하나카드', 'BC카드', 'KB국민카드'];

const Palette = ({ closeModal }) => {
  const { dispatch } = useCardFormContext();
  const onClickCardSelector = (name) => () => {
    dispatch({
      type: ACTION.SET_CARD_TYPE,
      data: { cardType: name },
    });
    closeModal();
  };

  return (
    <Styled.Container>
      <Styled.ColorPickerContainer>
        {CARD_LIST1.map((name) => (
          <ColorPicker
            color={CARD_TYPE[name].color}
            name={name}
            key={name}
            onClick={onClickCardSelector(name)}
          />
        ))}
      </Styled.ColorPickerContainer>
      <Styled.ColorPickerContainer>
        {CARD_LIST2.map((name) => (
          <ColorPicker
            color={CARD_TYPE[name].color}
            name={name}
            key={name}
            onClick={onClickCardSelector(name)}
          />
        ))}
      </Styled.ColorPickerContainer>
    </Styled.Container>
  );
};

Palette.propTypes = {
  closeModal: PropTypes.func,
};

export default Palette;
