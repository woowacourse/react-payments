import PropTypes from 'prop-types';
import { COLOR_NAMES } from '../../../constant';
import * as Styled from './index.styled';

const ColorPicker = ({ color, name, onClick }) => {
  return (
    <Styled.Container onClick={onClick}>
      <Styled.OptionContainer color={color} />
      <Styled.DescriptionContainer>{name}</Styled.DescriptionContainer>
    </Styled.Container>
  );
};

ColorPicker.propTypes = {
  color: PropTypes.oneOf(COLOR_NAMES),
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default ColorPicker;
