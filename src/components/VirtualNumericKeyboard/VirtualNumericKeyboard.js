import PropTypes from 'prop-types';
import { DELETE_KEY } from '../../constants';
import { shuffle } from '../../utils';
import Button from '../Button/Button';
import Styled from './VirtualNumericKeyboard.styles';

const VirtualNumericKeyboard = ({ onClickNumberButton, onClickDeleteButton, onBlur }) => (
  <Styled.Container onBlur={onBlur}>
    {shuffle(Array.from({ length: 10 }, (_, i) => i)).map((number) => (
      <Button key={number} type="button" onClick={onClickNumberButton}>
        {number}
      </Button>
    ))}
    <Button type="button" onClick={onClickDeleteButton}>
      {DELETE_KEY}
    </Button>
  </Styled.Container>
);
VirtualNumericKeyboard.propTypes = {
  onClickNumberButton: PropTypes.func,
  onClickDeleteButton: PropTypes.func,
  onBlur: PropTypes.func,
};

VirtualNumericKeyboard.defaultProps = {
  onClickNumberButton: () => {},
  onClickDeleteButton: () => {},
  onBlur: () => {},
};

export default VirtualNumericKeyboard;
