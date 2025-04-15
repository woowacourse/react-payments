import { CustomInputProps } from '../type/types';

export default function CustomInput({ type, placeholder, name, onChange }: CustomInputProps) {
  return <input className='custom-input' onChange={onChange} type={type} placeholder={placeholder} name={name} />;
}
