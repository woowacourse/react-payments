import type { CardInputProps } from './CardInputTypes';

export interface CardInputConfig {
  id: string;
  label: string;
  inputKeys: (keyof CardInputProps)[];
  placeholder: string;
  maxLength: number;
}

export interface CardSelectConfig {
  id: string;
  label: string;
  options: string[];
  defaultMessage: string;
}
