import { Meta, StoryObj } from '@storybook/react';
import { OwnerNameInput } from '../../components/Input/OwnerNameInput/OwnerNameInput';
import { ChangeEventHandler, useState } from 'react';

const meta = {
  component: OwnerNameInput,
  tags: ['autodocs'],
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
