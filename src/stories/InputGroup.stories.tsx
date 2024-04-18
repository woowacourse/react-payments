import type { Meta, StoryObj } from '@storybook/react';
import InputGroup from '../components/InputGroup';
import { CARD_NUMBER } from '../constants/inputInformation';

const meta = {
  title: 'InputGroup',
  component: InputGroup,
} satisfies Meta<typeof InputGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    section: CARD_NUMBER.type,
    setState: () => {},
  },
};
