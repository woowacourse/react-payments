import PropTypes from 'prop-types';
import Styled from './TransparentInput.style';

export const TransparentInput = ({ styles, innerRef, ...props }) => {
  return <Styled.TransparentInput ref={innerRef} {...props} styles={styles} />;
};

TransparentInput.propTypes = {
  styles: PropTypes.object,
  innerRef: PropTypes.object,
};
