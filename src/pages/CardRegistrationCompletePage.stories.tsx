import type { Meta, StoryObj } from '@storybook/react';
import CardRegistrationCompletePage from "./CardRegistrationCompletePage.tsx";
import {CardNumber} from "../types";
import {MemoryRouter} from "react-router-dom";

const sampleCardNumber: CardNumber = {
  first: '5511',
  second: '',
  third: '',
  forth: '',
};

const meta = {
  title: 'Page/CardRegistrationCompletePage',
  component: CardRegistrationCompletePage,
  decorators: [
    (Story) => (
      <MemoryRouter
        initialEntries={[
          {
            pathname: '/complete',
            state: {
              cardNumber: sampleCardNumber,
              brand: 'BC카드',
            },
          },
        ]}
      >
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CardRegistrationCompletePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
