import PropTypes from 'prop-types';
import { COLOR_NAMES } from '../../../constant';
import * as styled from './index.styled';

const ColorPicker = ({ color, name, onClick }) => {
  return (
    <styled.Container onClick={onClick}>
      <styled.OptionContainer color={color} />
      <styled.DescriptionContainer>{name}</styled.DescriptionContainer>
    </styled.Container>
  );
};

ColorPicker.propTypes = {
  color: PropTypes.oneOf(COLOR_NAMES),
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default ColorPicker;
