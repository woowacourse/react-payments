import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CardBrands } from '../../types';
import CardBrandDropdown from "./CardBrandDropdown.tsx";
import CardBrand from './CardBrandDropdown.tsx';

const cardBrandOptions = Object.values(CardBrands);

const meta: Meta<typeof CardBrand> = {
  title: 'Components/CardBrandDropdown',
  component: CardBrandDropdown,
  argTypes: {
    value: {
      control: {
        type: 'select',
        options: cardBrandOptions,
      },
    },
    onChange: { action: 'changed' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CardBrand>;

export const Default: Story = {
  args: {
    value: null,
    onChange: action('onChange'),
  },
};

export const Selected: Story = {
  args: {
    value: cardBrandOptions[0],
    onChange: action('onChange'),
  },
};
