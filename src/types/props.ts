export type width = 'small' | 'middle' | 'large';

export interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler;
  width: width;
  type: 'password' | 'number' | 'text';
  name?: string;
  placeholder?: string;
}
