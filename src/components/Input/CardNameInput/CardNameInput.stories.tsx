import { Meta, StoryObj } from '@storybook/react';
import { CardNameInput } from './CardNameInput';
import { ChangeEventHandler, useState } from 'react';

const meta = {
  component: CardNameInput,
} satisfies Meta<typeof CardNameInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNameInputStory: Story = {
  args: {
    value: '',
    onChange: () => {},
  },
  decorators: [
    (Story) => {
      const [cardName, setCardName] = useState('');
      const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.target;
        setCardName(value);
      };
      return <Story args={{ value: cardName, onChange: onChange }} />;
    },
  ],
};
