import type { Meta, StoryObj } from '@storybook/react-vite';
import Select from '../components/Common/Select';
import { CARD_ISSUER } from '../constants';

const meta = {
  title: 'Common/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select defaultValue="">
      <Select.Option value="">카드사를 선택해 주세요</Select.Option>
      {Object.entries(CARD_ISSUER).map(([issuer, { label }]) => (
        <Select.Option key={issuer} value={issuer}>
          {label}
        </Select.Option>
      ))}
    </Select>
  ),
};

export const Error: Story = {
  render: () => (
    <Select defaultValue="" data-is-error="true">
      <Select.Option value="">카드사를 선택해 주세요</Select.Option>
      {Object.entries(CARD_ISSUER).map(([issuer, { label }]) => (
        <Select.Option key={issuer} value={issuer}>
          {label}
        </Select.Option>
      ))}
    </Select>
  ),
};
