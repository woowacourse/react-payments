import React from 'react';

export default function Dot({ size, color, style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size ?? '16px'}
      height={size ?? '16px'}
      fill={color ?? '#616161'}
      style={style}
    >
      <title>Icon/dot</title>
      <g id="dot">
        <circle cx="8" cy="8" r="8" />
      </g>
    </svg>
  );
}
