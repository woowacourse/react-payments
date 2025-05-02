import type { Meta, StoryObj } from '@storybook/react';
import { CardRegisterSuccessPage } from './CardRegisterSuccessPage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CardRegisterSuccessPage> = {
  title: 'Pages/CardRegisterSuccessPage',
  component: CardRegisterSuccessPage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardRegisterSuccessPage>;

const mockLocationState = {
  cardNumbers: ['4556', '5678', '****', '****'],
  brand: 'BC',
};

const Template = () => {
  return (
    <MemoryRouter
      initialEntries={[{ pathname: '/success', state: mockLocationState }]}
    >
      <Routes>
        <Route path="/success" element={<CardRegisterSuccessPage />} />
      </Routes>
    </MemoryRouter>
  );
};

export const RegisterSuccessPage: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const message = canvas.getByTestId('success-message');

    expect(message.textContent).toBe(`4556로 시작하는BC카드가 등록되었어요.`);
  },
};
