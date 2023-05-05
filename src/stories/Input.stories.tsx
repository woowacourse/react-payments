import type { Meta, StoryObj } from '@storybook/react';

import Input from '../components/common/Input';

const meta: Meta<typeof Input> = {
  title: 'components/common/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

const InputTemplate: Story = {
  render: (args) => {
    return (
      <div style={{ width: '180px', height: '45px' }}>
        <Input {...args} />
      </div>
    );
  },
};

const DEFAULT_ARGS = {
  type: 'text',
  placeholder: '텍스트를 입력해보세요.',
};

export const Default: Story = {
  ...InputTemplate,
  args: { ...DEFAULT_ARGS },
};

export const AlignCenter: Story = {
  ...InputTemplate,
  args: {
    ...DEFAULT_ARGS,
    align: 'center',
  },
};

export const Underlined: Story = {
  ...InputTemplate,
  args: {
    ...DEFAULT_ARGS,
    underlined: true,
  },
};

export const UnderlinedAlignCenter: Story = {
  ...InputTemplate,
  args: {
    ...DEFAULT_ARGS,
    underlined: true,
    align: 'center'
  },
};
