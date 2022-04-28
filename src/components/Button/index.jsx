import { memo } from 'react';
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

const StyledButton = styled.button`
  background: ${props => props.bgColor};
  border: ${props => props.border};
  border-radius: ${props => props.shape === 'circle' && '50%'};
  color: ${props => props.color};
  cursor: pointer;
  font-size: ${props => props.buttonStyle.fontSize};
  font-weight: ${props => props.fontWeight};
  height: ${props => props.buttonStyle.height};
  margin: ${props => props.margin?.t || '0'} ${props => props.margin?.r || '0'}
    ${props => props.margin?.b || '0'} ${props => props.margin?.l || '0'};
  width: ${props => props.shape === 'circle' && props.buttonStyle.height};
`;

function Button({
  bgColor,
  border,
  className,
  color,
  content,
  fontWeight,
  margin,
  shape,
  size,
  onClickFunc,
  type,
}) {
  const buttonStyle = getButtonSize(size);
  return (
    <StyledButton
      bgColor={bgColor}
      border={border}
      buttonStyle={buttonStyle}
      color={color}
      content={content}
      fontWeight={fontWeight}
      margin={margin}
      shape={shape}
      className={className}
      onClick={onClickFunc}
      type={type}
    >
      {content}
    </StyledButton>
  );
}

Button.defaultProps = {
  bgColor: 'white',
  border: '0px',
  color: 'black',
  fontWeight: 'normal',
  shape: 'rectangle',
  size: 'medium',
  type: 'button',
};

Button.propTypes = {
  bgColor: PropTypes.string,
  border: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.node.isRequired,
  fontWeight: PropTypes.string,
  margin: PropTypes.object,
  shape: PropTypes.string,
  size: PropTypes.string,
  onClickFunc: PropTypes.func.isRequired,
};

export default memo(Button);
