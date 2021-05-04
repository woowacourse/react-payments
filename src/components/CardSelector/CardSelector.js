import PropTypes from 'prop-types';
import Styled from './CardSelector.styles';
import defaultCardURL from '../../assets/pullup.gif';

const CardSelector = ({ logo, title, onClick }) => (
  <Styled.Container onClick={onClick}>
    <Styled.Logo src={logo} />
    <Styled.Title>{title}</Styled.Title>
  </Styled.Container>
);

CardSelector.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

CardSelector.defaultProps = {
  logo: defaultCardURL,
  title: '브랜카드',
  onClick: () => {},
};

export default CardSelector;
