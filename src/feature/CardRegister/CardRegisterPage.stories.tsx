import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import CardRegisterPage from "./CardRegisterPage";

const meta = {
  title: "feature/CardRegister/CardRegisterPage",
  component: CardRegisterPage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/register"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CardRegisterPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
