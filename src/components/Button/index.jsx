import styled from 'styled-components';

import PropTypes from 'prop-types';

const getButtonSize = size => {
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
  margin,
  shape,
  size,
  onClickFunc,
}) {
  const buttonStyle = getButtonSize(size);
  const StyledButton = styled.button`
    background: ${bgColor};
    border: ${border};
    border-radius: ${shape === 'circle' && '50%'};
    color: ${color};
    font-size: ${buttonStyle.fontSize};
    font-weight: ${fontWeight};
    height: ${buttonStyle.height};
    margin: ${margin?.t || '0'} ${margin?.r || '0'} ${margin?.b || '0'}
      ${margin?.l || '0'};
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
  margin: PropTypes.object,
  shape: PropTypes.string,
  size: PropTypes.string,
  onClickFunc: PropTypes.func.isRequired,
};
