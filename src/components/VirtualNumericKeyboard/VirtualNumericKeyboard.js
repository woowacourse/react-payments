import PropTypes from 'prop-types';
import { shuffle } from '../../utils';
import Button from '../Button/Button';
import Styled from './VirtualNumericKeyboard.styles';

const VirtualNumericKeyboard = ({ onClick, onBlur }) => (
  <Styled.Container onBlur={onBlur}>
    {shuffle(Array.from({ length: 10 }, (_, i) => i)).map((number) => (
      <Button key={number} type="button" onClick={onClick}>
        {number}
      </Button>
    ))}
    <Button type="button" onClick={onClick}>
      del
    </Button>
  </Styled.Container>
);
VirtualNumericKeyboard.propTypes = {
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
};

VirtualNumericKeyboard.defaultProps = {
  onClick: () => {},
  onBlur: () => {},
};

export default VirtualNumericKeyboard;
