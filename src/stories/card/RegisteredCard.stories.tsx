import { Meta, StoryObj } from '@storybook/react';
import RegisteredCard from '../../components/card/RegisteredCard';
import { useFormInputs } from '../../hooks/useFormInputs';

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
      cardTitle={cardTitle}
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
