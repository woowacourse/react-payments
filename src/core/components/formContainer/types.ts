import type { ReactNode } from 'react';

export interface FormContainerProps {
  label?: string;
  children?: ReactNode;
  errorMessage?: string;
  isError?: boolean;
}
