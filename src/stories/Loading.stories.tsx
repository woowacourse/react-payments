import type { Meta, StoryObj } from '@storybook/react';
import Loading from '../pages/Loading/Loading';

const containerStyles: React.CSSProperties = {
  position: 'relative',
  marginTop: '30px',
  backgroundColor: '#ffffff',
  width: '370px',
  height: '700px',
  margin: '0 auto',
  border: '1px solid #dddddd',
  borderRadius: '10px',
};

/**
 * `Loading` 은 카드 등록 중일 때 사용자에게 등록 중을 알리기 위한 페이지입니다.
 */
const meta = {
  component: Loading,
  title: 'Loading',
  decorators: [
    Story => (
      <div style={containerStyles}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Loading>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {},
};

export default meta;
