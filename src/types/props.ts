export type width = 'xs' | 's' | 'm' | 'l' | 'xl';

export interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler;
  width: width;
  type: 'password' | 'number' | 'text';
  maxLength: number;
  name?: string;
  placeholder?: string;
}
