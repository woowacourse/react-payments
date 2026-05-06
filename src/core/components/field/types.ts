import type { ReactNode } from 'react';

export interface FieldProps {
  label?: string;
  children?: ReactNode;
  errorMessage?: ReactNode;
}
