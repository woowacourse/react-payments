import type { Meta, StoryObj } from '@storybook/react-vite';
import Form from '../components/Common/Form';
import Input from '../components/Common/Input';
import Button from '../components/Common/Button';
import Flex from '../components/Common/Flex';

const meta = {
  title: 'Common/Form',
  component: Form,
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Form>
      <Flex direction="column" gap={8}>
        <Input placeholder="카드 번호" />
        <Button type="submit">확인</Button>
      </Flex>
    </Form>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Form disabled>
      <Flex direction="column" gap={8}>
        <Input placeholder="카드 번호" />
        <Button type="submit">제출 중...</Button>
      </Flex>
    </Form>
  ),
};
