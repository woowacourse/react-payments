import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CardNameInputComponent from './CardNameInput';

const meta: Meta<typeof CardNameInputComponent> = {
  title: 'Components/Input',
  component: CardNameInputComponent,
};

export default meta;
type Story = StoryObj<typeof CardNameInputComponent>;

export const CardNameInput: Story = {};
