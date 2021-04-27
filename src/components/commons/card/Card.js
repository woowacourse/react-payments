import PropTypes from 'prop-types';
import Styled from './Card.style';

export const CARD_SIZE = {
  LG: 'LG',
  MD: 'MD',
};

export const Card = ({ size, children, styles, ...props }) => {
  return (
    <Styled.Card size={size} {...props} styles={styles}>
      {children}
    </Styled.Card>
  );
};

Card.defaultProps = {
  size: CARD_SIZE.MD,
};

Card.propTypes = {
  size: PropTypes.oneOf(Object.values(CARD_SIZE)),
  styles: PropTypes.object,
};
