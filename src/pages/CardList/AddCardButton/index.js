import React from 'react';
import './style.css';

export default function AddCardButton({ style, color }) {
  return (
    <button className="add-card" style={{ ...style, backgroundColor: color ?? '#e5e5e5' }}>
      <svg className="add-card__plus" viewBox="0 0 20 20">
        <g stroke="#575757" strokeWidth="2px">
          <path className="plus" d="M 0,10 h 20 m -10,-10 v 20" />
        </g>
      </svg>
    </button>
  );
}
