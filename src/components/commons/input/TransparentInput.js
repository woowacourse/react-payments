import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Styled from './TransparentInput.style';

export const TransparentInput = forwardRef(({ styles, ...props }, ref) => {
  return <Styled.TransparentInput ref={ref} {...props} styles={styles} />;
});

TransparentInput.propTypes = {
  styles: PropTypes.object,
};
