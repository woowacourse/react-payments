import React from 'react';

export default function PageTitle({ hasPrevButton, title }) {
  return (
    <div>
      <span>{hasPrevButton && '<'}</span>
      <span>{title}</span>
    </div>
  );
}
