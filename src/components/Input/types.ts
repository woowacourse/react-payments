import { ChangeEventHandler } from 'react';

export type ValueAndOnChange = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
