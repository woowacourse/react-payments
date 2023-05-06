import { Meta, StoryObj } from '@storybook/react';
import { SecurityCodeInput } from '../../components/Input/SecurityCodeInput/SecurityCodeInput';
import { GlobalStyle } from 'GlobalStyle';
import { ChangeEventHandler, useState } from 'react';

const meta = {
  component: SecurityCodeInput,
  tags: ['autodocs'],
} satisfies Meta<typeof SecurityCodeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SecurityCodeInputStory: Story = {
  args: {
    value: '',
    onChange: () => {},
  },
  decorators: [
    (Story) => {
      const [securityCode, setSecurityCode] = useState('');
      const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.target;

        setSecurityCode(value);
      };

      return (
        <>
          <GlobalStyle />
          <Story args={{ value: securityCode, onChange: handleChange }} />
        </>
      );
    },
  ],
};
