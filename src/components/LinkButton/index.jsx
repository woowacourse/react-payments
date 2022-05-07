import PropTypes from 'prop-types';
import * as styled from './index.styled';

const Link = ({ children, ...rest }) => {
  return <styled.Container {...rest}>{children}</styled.Container>;
};

Link.propTypes = {
  children: PropTypes.string,
};

export default Link;
