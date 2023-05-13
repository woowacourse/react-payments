import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AddCardPage from '../pages/AddCardPage';

const meta = {
  title: 'AddCardPage',
  tags: ['autodocs'],
  component: AddCardPage,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof AddCardPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <AddCardPage />;
  },
};

export const SUCCESS_TYPE: Story = {
  render: () => {
    return <AddCardPage />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const hanaCardButton = canvas.findByText('하나카드');
    userEvent.click(await hanaCardButton);

    const cardNumberInputs = canvas.getAllByPlaceholderText('****');
    await userEvent.type(cardNumberInputs[0], '1234', { delay: 100 });
    await userEvent.type(cardNumberInputs[1], '1234', { delay: 100 });
    await userEvent.type(cardNumberInputs[2], '1234', { delay: 100 });
    await userEvent.type(cardNumberInputs[3], '1234', { delay: 100 });

    const expireInputs = canvas.getAllByPlaceholderText('MM/YY');
    await userEvent.type(expireInputs[0], '1223', { delay: 100 });

    const nameInputs = canvas.getAllByPlaceholderText('이름을 입력하세요.');
    await userEvent.type(nameInputs[0], 'SLINKY', { delay: 100 });

    const CVCInputs = canvas.getAllByPlaceholderText('***');
    await userEvent.type(CVCInputs[0], '123', { delay: 100 });

    const passwordInputs = canvas.getAllByPlaceholderText('*');
    await userEvent.type(passwordInputs[0], '1', { delay: 100 });
    await userEvent.type(passwordInputs[1], '2', { delay: 100 });

    const nextButtonClick = canvas.findByText('다음');
    await userEvent.click(await nextButtonClick);
  },
};

export const ERROR_EXPIRED_TYPE: Story = {
  render: () => {
    return <AddCardPage />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const hanaCardButton = canvas.findByText('현대카드');
    userEvent.click(await hanaCardButton);

    const cardNumberInputs = canvas.getAllByPlaceholderText('****');
    await userEvent.type(cardNumberInputs[0], '1234', { delay: 100 });
    await userEvent.type(cardNumberInputs[1], '1234', { delay: 100 });
    await userEvent.type(cardNumberInputs[2], '1234', { delay: 100 });
    await userEvent.type(cardNumberInputs[3], '1234', { delay: 100 });

    const expireInputs = canvas.getAllByPlaceholderText('MM/YY');
    await userEvent.type(expireInputs[0], '1212', { delay: 100 });

    const nameInputs = canvas.getAllByPlaceholderText('이름을 입력하세요.');
    await userEvent.type(nameInputs[0], 'SLINKY', { delay: 100 });

    const CVCInputs = canvas.getAllByPlaceholderText('***');
    await userEvent.type(CVCInputs[0], '123', { delay: 100 });

    const passwordInputs = canvas.getAllByPlaceholderText('*');
    await userEvent.type(passwordInputs[0], '1', { delay: 100 });
    await userEvent.type(passwordInputs[1], '2', { delay: 100 });
  },
};

export const ERROR_CVC_TYPE: Story = {
  render: () => {
    return <AddCardPage />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const hanaCardButton = canvas.findByText('현대카드');
    userEvent.click(await hanaCardButton);

    const cardNumberInputs = canvas.getAllByPlaceholderText('****');
    await userEvent.type(cardNumberInputs[0], '1234', { delay: 100 });
    await userEvent.type(cardNumberInputs[1], '1234', { delay: 100 });
    await userEvent.type(cardNumberInputs[2], '1234', { delay: 100 });
    await userEvent.type(cardNumberInputs[3], '1234', { delay: 100 });

    const expireInputs = canvas.getAllByPlaceholderText('MM/YY');
    await userEvent.type(expireInputs[0], '1224', { delay: 100 });

    const nameInputs = canvas.getAllByPlaceholderText('이름을 입력하세요.');
    await userEvent.type(nameInputs[0], 'SLINKY', { delay: 100 });

    const CVCInputs = canvas.getAllByPlaceholderText('***');
    await userEvent.type(CVCInputs[0], '12', { delay: 100 });

    const passwordInputs = canvas.getAllByPlaceholderText('*');
    await userEvent.type(passwordInputs[0], '1', { delay: 100 });
    await userEvent.type(passwordInputs[1], '2', { delay: 100 });
  },
};
