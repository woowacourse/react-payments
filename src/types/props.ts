export interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler;
  width: 'small' | 'middle' | 'large';
  type: 'password' | 'number' | 'text';
  placeholder?: string;
}
