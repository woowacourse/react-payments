import React from 'react';
import './input.css';

export default function Input({
  value,
  onChange,
  onKeyDown,
  onFocus,
  width,
  fontColor,
  label,
  type,
  placeholder,
  textAlign,
  required,
  maxLength,
  letterCounter,
  inputMode,
  innerRef,
  ariaLabelledby,
  children,
  errorMessage,
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
          value={value}
          type={type}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
          style={{ width, color: fontColor }}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          inputMode={inputMode}
          ref={innerRef}
          aria-labelledby={ariaLabelledby}
        />
        {children}
      </div>
      {errorMessage && <div className="basic-input__error-message">{errorMessage}</div>}
    </div>
  );
}
