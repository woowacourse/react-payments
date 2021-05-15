import PropTypes from 'prop-types';
import { MESSAGE } from '../../constants';
import Styled from './ErrorPage.styles';

const ErrorPage = ({ message }) => (
  <Styled.Container>
    <Styled.Icon>😅</Styled.Icon>
    {message.split('\n').map((text) => (
      <Styled.Message key={text}>{text}</Styled.Message>
    ))}
  </Styled.Container>
);

ErrorPage.propTypes = {
  message: PropTypes.string,
};

ErrorPage.defaultProps = {
  message: MESSAGE.ERROR_PAGE.DEFAULT,
};

export default ErrorPage;
