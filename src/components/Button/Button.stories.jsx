import React from 'react';
import Button from '.';

export default {
  title: 'Payment/Button',
  component: Button,
};

export const Default = args => {
  return (
    <Button type="button" {...args}>
      다음
    </Button>
  );
};
