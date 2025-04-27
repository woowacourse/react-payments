import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import RegisterComplete from "./RegisterComplete";

const meta = {
  title: "RegisterComplete",
  component: RegisterComplete,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/register-complete",
            state: { cardFirstSegment: "1234", cardName: "BC카드" },
          },
        ]}
      >
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof RegisterComplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
