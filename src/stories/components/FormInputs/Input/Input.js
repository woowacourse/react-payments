import React from 'react';
import './input.css';

export default function Input({
  width,
  label,
  type,
  placeholder,
  textAlign,
  required,
  maxLength,
  letterCounter,
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
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        style={{ width }}
      />
    </label>
  );
}
