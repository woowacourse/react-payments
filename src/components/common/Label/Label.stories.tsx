import React from 'react';

import { Label } from './Label';

export default {
  component: Label,
  title: 'Label',
};

export const Default: React.FC = () => (
  <Label htmlFor={'default'}>
    <p>This is Label</p>
  </Label>
);
