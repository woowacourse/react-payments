import React, { forwardRef } from 'react';
import { Input } from '../';
import './style.css';

export default forwardRef(
  (
    {
      id,
      width,
      fontColor,
      label,
      textAlign,
      letterCounter,
      ariaLabelledby,
      errorMessage,
      inputStyle,
      children,
      ...props
    },
    ref
  ) => (
    <div className="input-with-counter">
      <Input
        id={id}
        width={width}
        fontColor={fontColor}
        label={label}
        textAlign={textAlign}
        ref={ref}
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
  )
);
