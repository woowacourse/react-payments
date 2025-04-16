import { CustomInputProps } from '../type/types';
import './customInput.css';

export default function CustomInput({ type, placeholder, name, onChange }: CustomInputProps) {
  return <input className='custom-input' onChange={onChange} type={type} placeholder={placeholder} name={name} />;
}
