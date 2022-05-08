import React from 'react';
import { isObject } from '../../hooks/useForm/utils';
import Input from './Input';

const PositiveNumberInput = React.forwardRef((props: any, ref) => {
  const removeNonPositiveValueOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
  };

  const _props = (isObject(props) ? { ...props } : { onChange: removeNonPositiveValueOnChange }) as any;
  if (Object.prototype.hasOwnProperty.call(_props, 'onChange')) {
    const { onChange: customOnChange } = _props as any;
    _props.onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      removeNonPositiveValueOnChange(event);
      customOnChange(event);
    };
  }

  return <Input {...props} ref={ref} />; // onChange가 뒤에 있어야 한다
});

PositiveNumberInput.displayName = 'PositiveNumberInput';

export default PositiveNumberInput;
