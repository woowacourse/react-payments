import React from 'react';
import './input.css';

export default function Input({
  value,
  onChange,
  onKeyDown,
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
}) {
  return (
    <label className="basic-input__label">
      {(label || letterCounter) && (
        <p>
          {label && <span className="label-text">{label}</span>}
          {letterCounter && (
            <span className="letter-counter">{`${letterCounter.current}/${letterCounter.max}`}</span>
          )}
        </p>
      )}
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
        inputMode={inputMode}
        ref={innerRef}
        aria-labelledby={ariaLabelledby}
      />
    </label>
  );
}
