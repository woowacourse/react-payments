import { Meta, StoryObj } from '@storybook/react';
import { useFormInputs } from '@hooks/useFormInputs';
import RegisteredCard from './RegisteredCard';

function RegisteredCardStories() {
  const {
    formInputs: { addCardPage },
  } = useFormInputs();

  const { cardTitle } = addCardPage;

  const cardInfo = {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '12',
    year: '28',
  };

  return (
    <RegisteredCard
      companyKind="default"
      createCard={() => {}}
      cardTitleInformation={cardTitle}
      {...cardInfo}
    />
  );
}

const meta: Meta<typeof RegisteredCardStories> = {
  component: RegisteredCardStories,
  title: 'RegisteredCard',
};

export default meta;
type Story = StoryObj<typeof RegisteredCardStories>;

export const Default: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '12',
    year: '28',
  },
};
