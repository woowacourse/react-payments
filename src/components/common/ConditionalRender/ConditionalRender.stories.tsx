import type { Meta, StoryObj } from '@storybook/react';
import ConditionalRender from './ConditionalRender';

const meta: Meta<typeof ConditionalRender> = {
  title: 'Components/ConditionalRender',
  component: ConditionalRender,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ConditionalRender>;

function NoticeBox({ text }: { text: string }) {
  return (
    <div
      style={{
        padding: '16px',
        backgroundColor: '#e0f7fa',
        border: '1px solid #4dd0e1',
        borderRadius: '8px',
        textAlign: 'center',
        fontWeight: 'bold',
      }}
    >
      {text}
    </div>
  );
}

export const Default: Story = {
  args: {
    condition: false,
  },
  render: function Render(args) {
    return (
      <ConditionalRender {...args}>
        <NoticeBox text="이 컴포넌트는 condition이 false라서 안 보입니다." />
      </ConditionalRender>
    );
  },
};

export const Visible: Story = {
  args: {
    condition: true,
  },
  render: function Render(args) {
    return (
      <ConditionalRender {...args}>
        <NoticeBox text="이 컴포넌트는 condition이 true라서 보입니다!" />
      </ConditionalRender>
    );
  },
};
