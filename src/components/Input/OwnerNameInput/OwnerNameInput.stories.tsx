import { Meta, StoryObj } from '@storybook/react';
import { OwnerNameInput } from './OwnerNameInput';
import { ChangeEventHandler, useState } from 'react';

const meta = {
  title: 'Components/Input/OwnerNameInput',
  component: OwnerNameInput,
} satisfies Meta<typeof OwnerNameInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OwnerNameStory: Story = {
  args: {
    value: '',
    onChange: () => {},
  },
  decorators: [
    (Story) => {
      const [ownerName, setOwnerName] = useState('');
      const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.target;

        setOwnerName(value);
      };

      return <Story args={{ value: ownerName, onChange: onChange }} />;
    },
  ],
};
