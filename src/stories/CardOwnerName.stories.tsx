import { Meta, StoryObj } from '@storybook/react';
import CardOwnerName from '../components/CardOwnerName/CardOwnerName';
import useOwnerName from '../hooks/useOwnerName';
import { userEvent, within } from '@storybook/testing-library';

const meta = {
  component: CardOwnerName,
  title: 'Section/CardOwnerName',
} satisfies Meta<typeof CardOwnerName>;

export default meta;
type Story = StoryObj<typeof CardOwnerName>;

export const Default: Story = {
  render: () => {
    const { cardOwnerName, ownerNameError, isValidatedCardOwnerName } =
      useOwnerName();

    return (
      <CardOwnerName
        cardOwnerName={cardOwnerName}
        errorMessage={ownerNameError}
        isValidatedCardOwnerName={isValidatedCardOwnerName}
      />
    );
  },
};

export const SuccessInteraction: Story = {
  render: () => {
    const { cardOwnerName, ownerNameError, isValidatedCardOwnerName } =
      useOwnerName();

    return (
      <CardOwnerName
        cardOwnerName={cardOwnerName}
        errorMessage={ownerNameError}
        isValidatedCardOwnerName={isValidatedCardOwnerName}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cardOwnerNameInput = canvas.queryByPlaceholderText(
      '(선택) 카드에 표시된 영어 이름을 입력하세요.'
    );

    if (!cardOwnerNameInput) return;
    await userEvent.type(cardOwnerNameInput, 'HELLO', { delay: 200 });
  },
};

export const FailureInteraction: Story = {
  render: () => {
    const { cardOwnerName, ownerNameError, isValidatedCardOwnerName } =
      useOwnerName();

    return (
      <CardOwnerName
        cardOwnerName={cardOwnerName}
        errorMessage={ownerNameError}
        isValidatedCardOwnerName={isValidatedCardOwnerName}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cardOwnerNameInput = canvas.queryByPlaceholderText(
      '(선택) 카드에 표시된 영어 이름을 입력하세요.'
    );

    if (!cardOwnerNameInput) return;
    await userEvent.type(cardOwnerNameInput, 'HEL1234', { delay: 200 });
  },
};
