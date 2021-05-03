import React from 'react';
import './style.css';

export default function Input({
  id,
  width,
  fontColor,
  label,
  textAlign,
  forwardRef,
  ariaLabelledby,
  errorMessage,
  inputStyle,
  children,
  ...props
}) {
  return (
    <div className="basic-input">
      {label && (
        <label className="basic-input__label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className={['d-flex', 'items-center'].join(' ')}>
        <input
          id={id}
          className={[
            `basic-input__input`,
            errorMessage ? 'error' : '',
            textAlign ? `text-${textAlign}` : '',
          ].join(' ')}
          style={inputStyle}
          ref={forwardRef}
          aria-labelledby={ariaLabelledby ?? label}
          {...props}
        />
        {children}
      </div>
      {errorMessage && <div className="basic-input__error-message">{errorMessage}</div>}
    </div>
  );
}
