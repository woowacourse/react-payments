import PropTypes from 'prop-types';

import Container from './styles';

function ToolTip({ text, align, children }) {
  return (
    <Container align={align} text={text}>
      <div className="tool-tip-text">{text}</div>
      {children}
    </Container>
  );
}

ToolTip.defaultProps = {
  text: '팁 내용이 비어있습니다.',
};

ToolTip.propTypes = {
  text: PropTypes.string,
  align: PropTypes.string.isRequired,
};

export default ToolTip;
