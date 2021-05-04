import React from 'react';
import './style.css';

export default function TextButton({ children, ...props }) {
  return (
    <button className="text-button" {...props}>
      {children}
    </button>
  );
}
