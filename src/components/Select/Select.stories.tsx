import type { Meta, StoryObj } from '@storybook/react';
import { CARD_COMPANIES } from '@/constants';
import Select from './Select';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: CARD_COMPANIES,
    value: '',
    name: 'company',
    placeholder: '카드사를 선택해주세요',
    onChange: (e) => console.log('Selected:', e.target.value),
  },
};

export const WithValue: Story = {
  args: {
    ...Default.args,
    value: 'shinhan',
  },
};

export const WithValidation: Story = {
  args: {
    ...Default.args,
    validation: {
      required: true,
      errorMessage: '카드사를 선택해주세요.',
    },
  },
};

export const CustomPlaceholder: Story = {
  args: {
    ...Default.args,
    placeholder: '원하시는 카드사를 선택해주세요',
  },
};

export const WithManyOptions: Story = {
  args: {
    ...Default.args,
    options: [
      { id: 'option1', name: '매우 긴 옵션 이름 1번' },
      { id: 'option2', name: '매우 긴 옵션 이름 2번' },
      { id: 'option3', name: '매우 긴 옵션 이름 3번' },
      { id: 'option4', name: '매우 긴 옵션 이름 4번' },
      { id: 'option5', name: '매우 긴 옵션 이름 5번' },
      { id: 'option6', name: '매우 긴 옵션 이름 6번' },
      { id: 'option7', name: '매우 긴 옵션 이름 7번' },
      { id: 'option8', name: '매우 긴 옵션 이름 8번' },
    ] as const,
  },
};
