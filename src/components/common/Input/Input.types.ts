import { ComponentProps } from 'react';

export type InputProps = {
  /**
   * Represents the input state type.
   */
  value?: string;
  /**
   * Indicates whether the input is valid.
   */
  isValid: boolean;
} & Omit<ComponentProps<'input'>, 'value'>;
