import { Meta, StoryObj } from '@storybook/react';
import { ExpirationDateInput } from './ExpirationDateInput';
import { ChangeEventHandler, useState } from 'react';
import { GlobalStyle } from 'GlobalStyle';

const meta = {
  component: ExpirationDateInput,
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExpirationDateInputStory: Story = {
  args: {
    onChangeMonth: () => {},
    onChangeYear: () => {},
  },
  decorators: [
    (Story) => {
      const [month, setMonth] = useState('');
      const [year, setYear] = useState('');

      const handleChangeMonth: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.target;

        setMonth(value);
      };

      const handleChangeYear: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.target;

        setYear(value);
      };

      return (
        <>
          <GlobalStyle />
          <Story
            args={{
              onChangeMonth: handleChangeMonth,
              onChangeYear: handleChangeYear,
            }}
          />
        </>
      );
    },
  ],
};
