import * as React from 'react';
import Container from './styles';

interface PropTypes {
  className?: string;
  type?: 'default' | 'primary' | 'warning' | 'danger' | 'success' | 'info';
  action?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  size?: 'small' | 'medium' | 'large';
  width?: number | string;
  isDisabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

function Button({
  className,
  type,
  action,
  size,
  width,
  isDisabled,
  onClick,
  children,
}: PropTypes) {
  return (
    <Container
      className={`button ${className}`}
      buttonType={type}
      type={action}
      size={size}
      width={width}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}

Button.defaultProps = {
  className: '',
  type: 'default',
  action: 'button',
  size: 'medium',
  width: 'unset',
  isDisabled: false,
};

export default Button;
