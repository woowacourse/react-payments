import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

const CONFIRM_TEXT = '확인';
export const Default = () => <Button>{CONFIRM_TEXT}</Button>;
