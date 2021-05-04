import PropTypes from 'prop-types';
import Styled from './ToolTip.styles';

const ToolTip = ({ buttonText, contentText }) => (
  <Styled.Container>
    <Styled.Button type="button">{buttonText}</Styled.Button>
    <Styled.Text>{contentText}</Styled.Text>
  </Styled.Container>
);

ToolTip.propTypes = {
  buttonText: PropTypes.string.isRequired,
  contentText: PropTypes.string.isRequired,
};

export default ToolTip;
