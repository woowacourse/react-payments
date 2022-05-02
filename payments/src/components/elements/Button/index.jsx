import React from 'react';

const Button = ({ className, children, onClick }) => {
  return (
    <button type='button' className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
