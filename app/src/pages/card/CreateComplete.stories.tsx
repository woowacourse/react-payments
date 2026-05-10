import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter, Routes, Route } from "react-router";
import CreateComplete from "./CreateComplete";

const meta = {
  title: "Pages/Card/CreateComplete",
  component: CreateComplete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CreateComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/card/done",
            state: {
              cardNumber: { "first-digits": "3612" },
              cardBrand: "bc",
            },
          },
        ]}
      >
        <Routes>
          <Route path="/card/done" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
};
