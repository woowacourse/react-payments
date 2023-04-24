import { ReactElement } from 'react';

export interface InputBoxProps {
  children: ReactElement;
  error: {
    [key: string]: string;
  };
}
