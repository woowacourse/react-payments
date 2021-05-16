import React from 'react';
import { Option } from '..';
import './style.css';

export default function Select({ options, onSelect }) {
  return (
    <div className="select">
      {Object.entries(options).map(([key, { NAME, COLOR }]) => (
        <Option key={key} name={NAME} color={COLOR} onClick={() => onSelect(key)} />
      ))}
    </div>
  );
}
