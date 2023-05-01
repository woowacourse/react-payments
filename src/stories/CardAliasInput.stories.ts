import { Meta, StoryObj } from '@storybook/react';
import CardAliasInput from '../components/@common/CardAliasInput';

const meta = {
  component: CardAliasInput,
  title: 'Section/CardAliasInput',
} satisfies Meta<typeof CardAliasInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardAliasInputStory: Story = {
  args: {
    type: 'text',
    value: '',
    placeholder: '10글자 이내의 카드별칭을 입력해주세요.',
  },
};
