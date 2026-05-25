import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter, Routes, Route } from "react-router";
import CardRegisterCompleteSection from "./CardRegisterCompleteSection";

const meta = {
  title: "Card/CardRegisterCompleteSection",
  component: CardRegisterCompleteSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardRegisterCompleteSection>;

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
