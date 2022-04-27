import styled from 'styled-components';

import PropTypes from 'prop-types';

const getButtonSizeTemplate = size => {
  switch (size) {
    case 'small':
      return { height: '25px', fontSize: '14px' };
    case 'medium':
      return { height: '45px', fontSize: '17px' };
    case 'large':
      return { height: '65px', fontSize: '20px' };
  }
};

export default function Button({
  bgColor,
  border,
  color,
  content,
  fontWeight,
  shape,
  size,
  onClickFunc,
}) {
  const buttonStyle = getButtonSizeTemplate(size);
  const StyledButton = styled.button`
    background: ${bgColor};
    border: ${border};
    border-radius: ${shape === 'circle' && '50%'};
    color: ${color};
    font-size: ${buttonStyle.fontSize};
    font-weight: ${fontWeight};
    height: ${buttonStyle.height};
    width: ${shape === 'circle' && buttonStyle.height};
  `;

  return <StyledButton onClick={onClickFunc}>{content}</StyledButton>;
}

Button.defaultProps = {
  bgColor: 'white',
  border: '0px',
  color: 'black',
  fontWeight: 'normal',
  shape: 'rectangle',
  size: 'medium',
};

Button.propTypes = {
  bgColor: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.node.isRequired,
  fontWeight: PropTypes.string,
  shape: PropTypes.string,
  size: PropTypes.string,
  onClickFunc: PropTypes.func.isRequired,
};
