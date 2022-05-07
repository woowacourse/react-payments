import { memo } from 'react';

import styled, { css } from 'styled-components';

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

function Button({
  bgColor,
  border,
  color,
  children,
  fontWeight,
  margin,
  shape,
  size,
  onClickFunc,
  ...props
}) {
  const buttonStyle = getButtonSize(size);
  return (
    <Styled.Button
      bgColor={bgColor}
      border={border}
      buttonStyle={buttonStyle}
      color={color}
      fontWeight={fontWeight}
      margin={margin}
      shape={shape}
      onClick={onClickFunc}
      {...props}
    >
      {children}
    </Styled.Button>
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
  color: PropTypes.string,
  content: PropTypes.node,
  fontWeight: PropTypes.string,
  margin: PropTypes.object,
  shape: PropTypes.string,
  size: PropTypes.string,
  onClickFunc: PropTypes.func,
};

const Styled = {
  Button: styled.button`
    cursor: pointer;

    ${({
      bgColor,
      border,
      shape,
      color,
      buttonStyle,
      fontWeight,
      margin,
    }) => css`
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
    `}
  `,
};

export default memo(Button);
