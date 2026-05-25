import type { Meta, StoryObj } from '@storybook/react-vite';
import Fieldset from '../components/Common/Fieldset';
import Input from '../components/Common/Input';
import Button from '../components/Common/Button';
import Flex from '../components/Common/Flex';

const meta = {
  title: 'Common/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Fieldset>
      <Flex direction="column" gap={8}>
        <Input placeholder="카드 번호" />
        <Button>확인</Button>
      </Flex>
    </Fieldset>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Fieldset disabled>
      <Flex direction="column" gap={8}>
        <Input placeholder="카드 번호" />
        <Button>확인</Button>
      </Flex>
    </Fieldset>
  ),
};
