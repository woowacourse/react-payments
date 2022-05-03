import PropTypes from 'prop-types';
import ColorPicker from './ColorPicker';
import * as styled from './index.styled';

const Palette = ({ onClickCardSelector }) => {
  return (
    <styled.Container>
      <styled.ColorPickerContainer>
        <ColorPicker
          color="red"
          name="포코 카드"
          onClick={onClickCardSelector('red')}
        />
        <ColorPicker
          color="blue"
          name="도리 카드"
          onClick={onClickCardSelector('blue')}
        />
        <ColorPicker
          color="green"
          name="호프 카드"
          onClick={onClickCardSelector('green')}
        />
        <ColorPicker
          color="purple"
          name="공원 카드"
          onClick={onClickCardSelector('purple')}
        />
      </styled.ColorPickerContainer>
      <styled.ColorPickerContainer>
        <ColorPicker
          color="mint"
          name="콜라 카드"
          onClick={onClickCardSelector('mint')}
        />
        <ColorPicker
          color="pink"
          name="블링 카드"
          onClick={onClickCardSelector('pink')}
        />
        <ColorPicker
          color="orange"
          name="태태 카드"
          onClick={onClickCardSelector('orange')}
        />
        <ColorPicker
          color="yellow"
          name="샐리 카드"
          onClick={onClickCardSelector('yellow')}
        />
      </styled.ColorPickerContainer>
    </styled.Container>
  );
};

Palette.propTypes = {
  onClickCardSelector: PropTypes.func,
};

export default Palette;
