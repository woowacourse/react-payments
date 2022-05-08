import React from 'react';
import Button from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Default = args => {
  return (
    <Button type="button" {...args}>
      다음
    </Button>
  );
};
