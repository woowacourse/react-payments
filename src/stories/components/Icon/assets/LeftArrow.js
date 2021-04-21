import React from 'react';

export default function LeftArrow({ size = '16px', color = '#616161' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8.3 15.8"
      width={size}
      height={size}
      fill={color}
    >
      <title>Icon/leftArrow</title>
      <g id="leftArrow">
        <path
          d="M7.9,15.8c-0.1,0-0.2,0-0.3-0.1L0.1,8.2C0,8,0,7.8,0.1,7.6l7.5-7.5C7.8,0,8,0,8.2,0.1s0.2,0.4,0,0.6L1.1,7.8
	C1,7.9,1,7.9,1.1,8l7.1,7.1c0.2,0.2,0.2,0.4,0,0.6C8.1,15.8,8,15.8,7.9,15.8z"
        />
      </g>
    </svg>
  );
}
