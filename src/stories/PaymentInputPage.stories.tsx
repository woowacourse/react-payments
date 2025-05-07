import type { Meta, StoryObj } from "@storybook/react";
import PaymentInputPage from "../pages/add-card/payment-input/PaymentInputPage";
import { MemoryRouter, Routes, Route } from "react-router";

const meta = {
  title: "PaymentInputPage",
  component: PaymentInputPage,
  args: {},
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PaymentInputPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <MemoryRouter initialEntries={["/add-card"]}>
        <Routes>
          <Route path="/add-card" element={<PaymentInputPage />} />
        </Routes>
      </MemoryRouter>
    );
  },
};
