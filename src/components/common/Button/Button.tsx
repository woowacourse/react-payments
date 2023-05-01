import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDisable?: boolean;
  text: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  cursor?: string;
  icon?: ReactNode | undefined;
  iconPosition?: 'left' | 'right';
  tabIndex?: number;
  padding?: string;
  borderRadius?: string;
}

export default function Button({
  isDisable,
  text,
  backgroundColor,
  color,
  cursor,
  tabIndex,
  fontSize,
  icon,
  iconPosition = 'left',
  padding,
  borderRadius,
  ...rest
}: ButtonProps) {
  return (
    <Wrapper
      isDisable={isDisable}
      disabled={isDisable}
      tabIndex={tabIndex}
      cursor={cursor}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      color={color}
      padding={padding}
      borderRadius={borderRadius}
      {...rest}
    >
      {icon && iconPosition === 'left' && <IconWrapper>{icon}</IconWrapper>}
      {text}
      {icon && iconPosition === 'right' && <IconWrapper>{icon}</IconWrapper>}
    </Wrapper>
  );
}

interface ButtonWrapperProps {
  isDisable?: boolean;
  cursor?: string;
  backgroundColor?: string;
  fontWeight?: string;
  color?: string;
  fontSize?: string;
  padding?: string;
  borderRadius?: string;
  height?: string;
}

const Wrapper = styled.button<ButtonWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ isDisable, cursor }) =>
    isDisable ? 'not-allowed' : cursor ? cursor : 'pointer'};
  border: 0;
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'transparent'};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 700)};
  color: ${({ isDisable, theme, color }) =>
    color ? color : isDisable ? theme.colors.gray : theme.colors.primaryText};
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 4px;
`;
