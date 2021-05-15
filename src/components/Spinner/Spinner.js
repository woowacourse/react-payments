import PropTypes from 'prop-types';
import Styled from './Spinner.styles';

const Spinner = ({ color }) => <Styled.Container color={color} />;

Spinner.propTypes = {
  color: PropTypes.string,
};

Spinner.defaultProps = {
  color: 'grey',
};

export default Spinner;
