import PropTypes from 'prop-types';
import Styled from './Card.styles';

const CardAddButton = ({ bgColor, size }) => (
  <Styled.Container size={size}>
    <Styled.Card bgColor={bgColor} size={size}>
      <Styled.LabelText>+</Styled.LabelText>
    </Styled.Card>
  </Styled.Container>
);

CardAddButton.propTypes = {
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

CardAddButton.defaultProps = {
  bgColor: '#E5E5E5',
  size: 'medium',
};

export default CardAddButton;
