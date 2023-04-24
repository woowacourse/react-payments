export type CardProps = Record<'bgColor', string>;

export type width = 'xs' | 's' | 'm' | 'l' | 'xl';

export interface InputProps {
  onChange: React.ChangeEventHandler;
  width: width;
  type: 'password' | 'number' | 'text';
  maxLength: number;
  value: string;
  name?: string;
  placeholder?: string;
  isFocus?: boolean;
}
