import PropTypes from 'prop-types';
import Styled from './Circle.style';

export const CIRCLE_SIZE = Object.freeze({
  LG: 'LG',
  SM: 'SM',
  XS: 'XS',
  XXS: 'XXS',
});

export const Circle = ({ children, size, styles, ...props }) => {
  return (
    <Styled.Circle size={size} {...props} styles={styles}>
      {children}
    </Styled.Circle>
  );
};

Circle.propTypes = {
  size: PropTypes.oneOf(Object.values(CIRCLE_SIZE)),
  styles: PropTypes.object,
};
