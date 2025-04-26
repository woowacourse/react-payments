import CardPasswordNumber from './CardPasswordNumber';
import type { Meta } from '@storybook/react';
import { useState } from '@storybook/preview-api';
import { ERROR_MESSAGE } from '../../../constants';
import { useControlledCardPasswordNumber } from './hooks/useControlledCardPasswordNumber';

const meta = {
  title: 'card/CardPasswordNumber',
  component: CardPasswordNumber,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const { cardPassword, cardPasswordErrorMessage, handleCardPasswordInputChange } =
        useControlledCardPasswordNumber();

      return (
        <Story
          args={{
            cardPassword,
            cardPasswordErrorMessage,
            handleCardPasswordInputChange,
          }}
        />
      );
    },
  ],
} satisfies Meta<typeof CardPasswordNumber>;

export default meta;

export const Default = {};

export const Valid = {
  render: function Render() {
    const { handleCardPasswordInputChange } = useControlledCardPasswordNumber();

    const [cardPassword] = useState('31');

    const [cardPasswordErrorMessage] = useState('');

    return (
      <CardPasswordNumber
        cardPassword={cardPassword}
        cardPasswordErrorMessage={cardPasswordErrorMessage}
        handleCardPasswordInputChange={handleCardPasswordInputChange}
      />
    );
  },
};

export const Error = {
  render: function Render() {
    const { handleCardPasswordInputChange } = useControlledCardPasswordNumber();

    const [cardPassword] = useState('3d');

    const [cardPasswordErrorMessage] = useState(ERROR_MESSAGE.onlyNumber);

    return (
      <CardPasswordNumber
        cardPassword={cardPassword}
        cardPasswordErrorMessage={cardPasswordErrorMessage}
        handleCardPasswordInputChange={handleCardPasswordInputChange}
      />
    );
  },
};
