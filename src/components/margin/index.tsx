import React, { ClassAttributes, HTMLAttributes } from 'react';

export const MarginWrapper = (
  props: ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>,
) => <div {...props}></div>;
