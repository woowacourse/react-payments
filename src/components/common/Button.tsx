import type { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

export default function Button({ children, type = 'button', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      css={(theme) => ({
        backgroundColor: theme.colors.cardBackground,
        width: '100%',
        height: '44px',
        borderRadius: '5px',
        ...theme.typography.mode,
        color: theme.colors.white,
        textAlign: 'center',
      })}
      {...props}
    >
      {children}
    </button>
  );
}
