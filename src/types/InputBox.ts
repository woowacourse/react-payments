import { ReactElement } from 'react';

export interface InputBoxProps {
  children: ReactElement | ReactElement[];
  error: {
    [key: string]: string;
  };
}
