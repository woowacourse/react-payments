import PropTypes from 'prop-types';
import Styled from './ErrorMessageBox.styles';

const ErrorMessageBox = ({ errorMessage }) => <Styled.Container>{errorMessage}</Styled.Container>;

ErrorMessageBox.propTypes = {
  errorMessage: PropTypes.string,
};

ErrorMessageBox.defaultProps = {
  errorMessage: '',
};

export default ErrorMessageBox;
