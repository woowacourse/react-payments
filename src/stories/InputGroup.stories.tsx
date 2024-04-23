import type { Meta, StoryObj } from '@storybook/react';
import InputGroup from '../components/common/InputGroup';
import { CARD_NUMBER } from '../constants/inputInformation';
import Input from '../components/common/Input';

const meta = {
  title: 'InputGroup',
  component: InputGroup,
} satisfies Meta<typeof InputGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: CARD_NUMBER.title,
    label: CARD_NUMBER.label,
    subtitle: CARD_NUMBER.subtitle,
    children: Input({
      name: 'month',
      placeholder: 'MM',
      setValue: () => {},
      maxLength: 2,
      validation: () => {},
      handleError: () => {},
    }),
  },
};
