import { Meta, StoryFn } from '@storybook/react';
import CardPassword from '../components/CardPassword/CardPassword';
import RefProvider from '../contexts/RefProvider';
import usePassword from '../hooks/usePassword';

const meta = {
  component: CardPassword,
  title: 'Section/CardPassword',
  decorators: [
    (Story) => (
      <RefProvider>
        <Story />
      </RefProvider>
    ),
  ],
} satisfies Meta<typeof CardPassword>;

export default meta;

type Story = StoryFn<typeof meta>;

export const CardPasswordStory: Story = () => {
  const { cardPasswords, passwordError, handleCardPasswords } = usePassword();

  return (
    <CardPassword
      cardPasswords={cardPasswords}
      errorMessage={passwordError}
      handleCardPasswords={handleCardPasswords}
    />
  );
};
