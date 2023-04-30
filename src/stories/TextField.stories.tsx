import type { Meta, StoryObj } from '@storybook/react';

import TextField from '../components/common/TextField';
import Input from '../components/common/Input';

const meta: Meta<typeof TextField> = {
  title: 'components/common/TextField',
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

const TextFieldTemplate: Story = {
  render: (args) => {
    return (
      <div style={{ width: '420px' }}>
        <TextField {...args} />
      </div>
    );
  },
};

const DEFAULT_ARGS = {
  label: 'label',
  children: <Input />,
};

export const Default: Story = {
  ...TextFieldTemplate,
  args: { ...DEFAULT_ARGS },
};

export const Small: Story = {
  ...TextFieldTemplate,
  args: { ...DEFAULT_ARGS, size: 'small' },
};

export const Medium: Story = {
  ...TextFieldTemplate,
  args: { ...DEFAULT_ARGS, size: 'medium' },
};

export const Fit: Story = {
  ...TextFieldTemplate,
  args: { ...DEFAULT_ARGS, size: 'fit' },
};

export const WithValueLength: Story = {
  ...TextFieldTemplate,
  args: { ...DEFAULT_ARGS, maxLength: 20 },
};

export const SmallWithTooltip: Story = {
  ...TextFieldTemplate,
  args: {
    ...DEFAULT_ARGS,
    size: 'small',
    tooltipMessage: '이것은 툴팁입니다.',
  },
};

export const MediumWithTooltip: Story = {
  ...TextFieldTemplate,
  args: {
    ...DEFAULT_ARGS,
    size: 'medium',
    tooltipMessage: '이것은 툴팁입니다.',
  },
};

export const Split: Story = {
  ...TextFieldTemplate,
  args: {
    ...DEFAULT_ARGS,
    children: (
      <>
        <Input />
        <Input />
        <Input />
      </>
    ),
    split: true,
  },
};
