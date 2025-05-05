import type { Meta, StoryObj } from '@storybook/react';
import MobileLayoutContainer from './MobileLayoutContainer';

const meta: Meta<typeof MobileLayoutContainer> = {
  title: 'Components/MobileLayoutContainer',
  component: MobileLayoutContainer,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof MobileLayoutContainer>;

export const Default: Story = {
  render: function Render() {
    return (
      <MobileLayoutContainer>
        <div
          style={{
            padding: '24px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center',
          }}
        >
          모바일 레이아웃 안에 있는 콘텐츠
        </div>
      </MobileLayoutContainer>
    );
  },
};
