import React from 'react';
import { Input } from '../';
import './style.css';

export default function InputWithCounter({
  id,
  width,
  fontColor,
  label,
  textAlign,
  letterCounter,
  forwardRef,
  ariaLabelledby,
  errorMessage,
  inputStyle,
  children,
  ...props
}) {
  return (
    <div className="input-with-counter">
      <Input
        id={id}
        width={width}
        fontColor={fontColor}
        label={label}
        textAlign={textAlign}
        forwardRef={forwardRef}
        ariaLabelledby={ariaLabelledby}
        errorMessage={errorMessage}
        inputStyle={inputStyle}
        children={children}
        {...props}
      />
      {letterCounter && (
        <span className="letter-counter">{`${letterCounter.current}/${letterCounter.max}`}</span>
      )}
    </div>
  );
}
