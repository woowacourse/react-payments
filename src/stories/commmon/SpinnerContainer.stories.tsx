import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SpinnerContainer from '../../components/common/SpinnerContainer/SpinnerContainer';

const meta = {
  title: 'Payments/Common/SpinnerContainer',
  component: SpinnerContainer,
  argTypes: {
    spinnerSize: {
      control: { type: 'number' },
    },
  },
  decorators: [
    (Story) => (
      <div style={style}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SpinnerContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'Loading Text',
    spinnerSize: 70,
  },
};

const style: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '20px',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
