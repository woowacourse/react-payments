export interface InputProps {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler;
  width: 'small' | 'middle' | 'large';
  type: 'password' | 'number' | 'text';
  placeholder?: string;
  // inputRef: React.MutableRefObject<HTMLInputElement | null>;
}
