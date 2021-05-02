import React, { forwardRef } from 'react';
import './style.css';

export default forwardRef(
  (
    {
      id,
      width,
      fontColor,
      label,
      textAlign,
      ariaLabelledby,
      errorMessage,
      inputStyle,
      children,
      ...props
    },
    ref
  ) => (
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
          ref={ref}
          aria-labelledby={ariaLabelledby ?? label}
          {...props}
        />
        {children}
      </div>
      {errorMessage && <div className="basic-input__error-message">{errorMessage}</div>}
    </div>
  )
);
