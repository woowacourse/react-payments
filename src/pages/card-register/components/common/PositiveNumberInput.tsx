import React, { InputHTMLAttributes } from 'react';
import { SerializedStyles } from '@emotion/react';
import { isObject } from '../../../../hooks/useForm/utils';
import { inputStyle } from './Input';

type Props = {
  css?: SerializedStyles;
} & InputHTMLAttributes<HTMLInputElement>;

const PositiveNumberInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const removeNonPositiveValueOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
  };

  const _props = (isObject(props) ? { ...props } : { onChange: removeNonPositiveValueOnChange }) as Props;
  if (Object.prototype.hasOwnProperty.call(_props, 'onChange')) {
    const { onChange: customOnChange } = _props as any;
    _props.onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      removeNonPositiveValueOnChange(event);
      customOnChange(event);
    };
  }

  if (!_props.css) {
    _props.css = inputStyle;
  }

  return <input {..._props} ref={ref} />; // onChange가 뒤에 있어야 한다
});

PositiveNumberInput.displayName = 'PositiveNumberInput';

export default PositiveNumberInput;
