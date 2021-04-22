import PropTypes from 'prop-types';
import Styled from './CardSelector.styles';
import defaultCardURL from '../../assets/pullup.gif';

const CardSelector = ({ logoImageURL, title }) => (
  <Styled.Container>
    <Styled.Logo src={logoImageURL} />
    <Styled.Title>{title}</Styled.Title>
  </Styled.Container>
);

CardSelector.propTypes = {
  logoImageURL: PropTypes.string,
  title: PropTypes.string,
};

CardSelector.defaultProps = {
  logoImageURL: defaultCardURL,
  title: '브랜카드',
};

export default CardSelector;
