import React from 'react';
import './input.css';

export default function Input({
  width,
  fontColor,
  label,
  textAlign,
  letterCounter,
  innerRef,
  ariaLabelledby,
  errorMessage,
  inputStyle,
  children,
  ...props
}) {
  return (
    <div className="basic-input">
      {(label || letterCounter) && (
        <div className="basic-input__label">
          {label && <label className="label-text">{label}</label>}
          {letterCounter && (
            <span className="letter-counter">{`${letterCounter.current}/${letterCounter.max}`}</span>
          )}
        </div>
      )}
      <div className={['d-flex', 'items-center'].join(' ')}>
        <input
          className={['basic-input__input', `text-${textAlign}`].join(' ')}
          style={inputStyle}
          ref={innerRef}
          aria-labelledby={ariaLabelledby}
          {...props}
        />
        {children}
      </div>
      {errorMessage && <div className="basic-input__error-message">{errorMessage}</div>}
    </div>
  );
}
