import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Common/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: '텍스트 내용',
    },
    type: {
      control: 'text',
      options: ['title', 'subTitle'],
      description: '텍스트 타입',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    text: '기본 텍스트 내용입니다.',
    type: 'title',
  },
};

export const Title: Story = {
  args: {
    text: '결제할 카드 번호를 입력해 주세요',
    type: 'title',
  },
};

export const SubTitle: Story = {
  args: {
    text: '본인 명의의 카드만 결제 가능합니다.',
    type: 'subTitle',
  },
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text text="결제할 카드 번호를 입력해 주세요." type="title" />
      <Text text="본인 명의의 카드만 결제 가능합니다." type="subTitle" />
    </div>
  ),
};
