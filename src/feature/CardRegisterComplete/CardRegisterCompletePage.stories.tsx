import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import CardRegisterCompletePage from "./CardRegisterCompletePage";

const meta = {
  title: "feature/CardRegisterComplete/CardRegisterCompletePage",
  component: CardRegisterCompletePage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CardRegisterCompletePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <MemoryRouter
      initialEntries={[
        {
          pathname: "/register/complete",
          state: {
            firstCardNumberChunk: "4123",
            cardCompany: "신한카드",
          },
        },
      ]}
    >
      <CardRegisterCompletePage />
    </MemoryRouter>
  ),
};
