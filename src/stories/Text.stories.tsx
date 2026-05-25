import type { Meta, StoryObj } from '@storybook/react-vite';
import Text from '../components/Common/Text';

const meta = {
  title: 'Common/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 's', 'm', 'l', 'xl', '2xl'],
    },
    weight: {
      control: { type: 'select' },
      options: ['medium', 'bold'],
    },
    color: {
      control: { type: 'select' },
      options: ['black', 'white', 'description', 'error'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '카드 번호를 입력해 주세요',
    size: 'm',
    weight: 'medium',
    color: 'black',
  },
};

export const Title: Story = {
  args: {
    children: '결제할 카드 번호를 입력해 주세요',
    size: 'l',
    weight: 'bold',
    color: 'black',
  },
};

export const Description: Story = {
  args: {
    children: '본인 명의의 카드만 결제 가능합니다.',
    size: 'xs',
    color: 'description',
  },
};

export const ErrorMessage: Story = {
  args: {
    children: '카드 번호는 4자리로 입력해 주세요.',
    size: 's',
    color: 'error',
  },
};

export const SpanVariant: Story = {
  render: () => (
    <Text.Span size="m" weight="bold" color="black">
      카드 번호
    </Text.Span>
  ),
};

export const LabelVariant: Story = {
  render: () => (
    <Text.Label size="s" color="black">
      카드 번호
    </Text.Label>
  ),
};
