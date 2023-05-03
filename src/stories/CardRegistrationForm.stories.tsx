import { userEvent, within } from '@storybook/testing-library';
import CardRegistrationForm from '../components/CardRegistrationForm';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof CardRegistrationForm>;

const meta: Meta<typeof CardRegistrationForm> = {
  title: 'CardRegistrationForm',
  component: CardRegistrationForm,
};

export default meta;

export const Default: Story = {
  args: {},
};

export const Failure: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cardNumberInput = canvas.queryAllByPlaceholderText('1234');
    const cardExpirationMonthInput = canvas.getByPlaceholderText('MM');
    const cardExpirationYearInput = canvas.getByPlaceholderText('YY');

    const submitButton = canvas.getByText('다음');

    await new Promise(resolve => {
      setTimeout(resolve, 700);
    });
    await userEvent.type(cardNumberInput[0], '2982', { delay: 200 });
    await userEvent.type(cardNumberInput[1], '7225', { delay: 200 });
    await userEvent.type(cardNumberInput[2], '1889', { delay: 200 });
    await userEvent.type(cardNumberInput[3], '242', { delay: 200 });

    await userEvent.tab();
    await userEvent.keyboard('1324', { delay: 200 });
    await userEvent.clear(cardExpirationMonthInput);
    await userEvent.clear(cardExpirationYearInput);
    await userEvent.type(cardExpirationMonthInput, '1223', { delay: 200 });
    await userEvent.clear(cardExpirationMonthInput);
    await userEvent.clear(cardExpirationYearInput);
    await userEvent.type(cardExpirationMonthInput, '1224', { delay: 200 });
    await userEvent.tab();

    await userEvent.keyboard('KIMMINJAE', { delay: 200 });
    await userEvent.tab();

    await userEvent.keyboard('12', { delay: 200 });
    await userEvent.tab();

    await userEvent.keyboard('1', { delay: 200 });
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.click(submitButton);
  },
};

export const Success: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cardNumberInput = canvas.queryAllByPlaceholderText('1234');

    const submitButton = canvas.getByText('다음');

    await new Promise(resolve => {
      setTimeout(resolve, 700);
    });
    await userEvent.type(cardNumberInput[0], '2982', { delay: 200 });
    await userEvent.type(cardNumberInput[1], '7225', { delay: 200 });
    await userEvent.type(cardNumberInput[2], '1889', { delay: 200 });
    await userEvent.type(cardNumberInput[3], '2422', { delay: 200 });

    await userEvent.tab();
    await userEvent.keyboard('1224', { delay: 200 });
    await userEvent.tab();

    await userEvent.keyboard('KIMMINJAE', { delay: 200 });
    await userEvent.tab();

    await userEvent.keyboard('122', { delay: 200 });
    await userEvent.tab();

    await userEvent.keyboard('13', { delay: 200 });
    await userEvent.click(submitButton);
  },
};
