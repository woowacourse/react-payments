import type { Meta, StoryObj } from '@storybook/react';
import Button from '../../components/common/Button/Button';
import LeftIcon from '../../assets/left-icon.svg';

const meta = {
  title: 'Payments/Common/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    children: 'Button',
  },
};

export const DefaultSmall: Story = {
  args: {
    variant: 'default',
    size: 'small',
    children: 'Button',
  },
};

export const DefaultLarge: Story = {
  args: {
    variant: 'default',
    size: 'large',
    children: 'Button',
  },
};

export const DefaultIcon: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    children: 'Button',
    icon: `${LeftIcon}`,
  },
};

export const DefaultDisabled: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    children: 'Button',
    disabled: true,
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button',
  },
};

export const PrimarySmall: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Button',
  },
};

export const PrimaryLarge: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Button',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Button',
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: 'secondary',
    size: 'small',
    children: 'Button',
  },
};

export const SecondaryLarge: Story = {
  args: {
    variant: 'secondary',
    size: 'large',
    children: 'Button',
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Button',
    disabled: true,
  },
};

export const TextButton: Story = {
  args: {
    variant: 'textButton',
    size: 'medium',
    children: 'Button',
  },
};

export const TextButtonSmall: Story = {
  args: {
    variant: 'textButton',
    size: 'small',
    children: 'Button',
  },
};

export const TextButtonLarge: Story = {
  args: {
    variant: 'textButton',
    size: 'large',
    children: 'Button',
  },
};

export const TextButtonDisabled: Story = {
  args: {
    variant: 'textButton',
    size: 'medium',
    children: 'Button',
    disabled: true,
  },
};
