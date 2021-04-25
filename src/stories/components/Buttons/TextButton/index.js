import React from 'react';
import './textButton.css';

export default function TextButton({ text, ...props }) {
  return (
    <button className="text-button" {...props}>
      {text}
    </button>
  );
}
