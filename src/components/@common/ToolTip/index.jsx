import PropTypes from 'prop-types';

import Container from './styles';

function ToolTip({ text, align, isDisabled, children }) {
  return (
    <Container align={align} text={text} isDisabled={isDisabled}>
      <div className="tool-tip-text">{text}</div>
      {children}
    </Container>
  );
}

ToolTip.defaultProps = {
  text: '팁 내용이 비어있습니다.',
  isDisabled: false,
};

ToolTip.propTypes = {
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  align: PropTypes.string.isRequired,
};

export default ToolTip;
