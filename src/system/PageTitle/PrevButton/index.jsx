import React from 'react';

const PrevButton = ({ hasPrevButton }) => {
  return hasPrevButton && <span>{'<'}</span>;
};

export default PrevButton;
