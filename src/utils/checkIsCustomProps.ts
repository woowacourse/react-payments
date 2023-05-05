import React from 'react';

export const checkIsCustomProps = (children: React.ReactNode, isCustom: boolean | undefined) => {
  if (React.isValidElement(children) && !isCustom) throw new Error('Check isCustom props');
};
