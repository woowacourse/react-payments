import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CardBrands, CardBrandType } from '../../types';
import CardBrandDropdown from './CardBrandDropdown';

const cardBrandOptions: CardBrandType[] = Object.values(CardBrands);

const meta: Meta<typeof CardBrandDropdown> = {
  title: 'Components/CardBrandDropdown',
  component: CardBrandDropdown,
  argTypes: {
    value: {
      control: {
        type: 'select',
        options: [null, ...cardBrandOptions],
      },
    },
    onChange: { action: 'onChange' },
    tabIndex: {
      control: { type: 'number' },
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CardBrandDropdown>;

const baseArgs = {
  brandRef: React.createRef<HTMLSelectElement>(),
  options: cardBrandOptions,
  tabIndex: 0,
  onChange: action('onChange'),
};

export const Default: Story = {
  args: {
    ...baseArgs,
    value: null,
  },
};

export const Selected: Story = {
  args: {
    ...baseArgs,
    value: cardBrandOptions[0],
  },
};
