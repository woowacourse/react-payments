import styled, { css } from 'styled-components';

import { memo } from 'react';

const getButtonSize = (size: 'small' | 'medium' | 'large') => {
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
  cursor: pointer;

  ${({
    bgColor,
    border,
    shape,
    color,
    buttonStyle,
    fontWeight,
    margin,
  }: Pick<
    Props,
    'bgColor' | 'border' | 'shape' | 'color' | 'fontWeight' | 'margin'
  > & {
    buttonStyle: {
      height: string;
      fontSize: string;
    };
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
`;

type Props = {
  bgColor?: string;
  border?: string;
  children?: React.ReactNode;
  className?: string;
  color?: string;
  fontWeight?: string;
  margin?: {
    t?: string;
    r?: string;
    b?: string;
    l?: string;
  };
  shape?: 'circle' | 'rectangle';
  size?: 'small' | 'medium' | 'large';
  onClickFunc?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'submit' | 'reset' | 'button';
};

function Button({
  bgColor = 'white',
  border = '0px',
  children,
  className,
  color = 'black',
  fontWeight = 'normal',
  margin,
  shape = 'rectangle',
  size = 'medium',
  onClickFunc,
  type = 'button',
}: Props) {
  const buttonStyle = getButtonSize(size);

  return (
    <StyledButton
      bgColor={bgColor}
      border={border}
      buttonStyle={buttonStyle}
      color={color}
      fontWeight={fontWeight}
      margin={margin}
      shape={shape}
      type={type}
      className={className}
      onClick={onClickFunc}
    >
      {children}
    </StyledButton>
  );
}

export default memo(Button);
