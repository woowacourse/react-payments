import type { ReactNode, ComponentProps } from 'react';

interface FieldOwnProps {
  label?: string;
  children?: ReactNode;
  errorMessage?: ReactNode;
}

export interface FieldProps extends Omit<ComponentProps<'div'>, keyof FieldOwnProps>, FieldOwnProps {}
