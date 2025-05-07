import type { Meta, StoryObj } from "@storybook/react";
import AddCardSuccessPage from "../pages/add-card/success/AddCardSuccessPage";
import { MemoryRouter, Route, Routes } from "react-router";

const meta = {
  title: "Pages/AddCardSuccessPage",
  component: AddCardSuccessPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AddCardSuccessPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <MemoryRouter
      initialEntries={[
        {
          pathname: "/add-card/success",
          state: { firstCardNumber: "1234", brandName: "국민카드" },
        },
      ]}
    >
      <Routes>
        <Route path="/add-card/success" element={<AddCardSuccessPage />} />
      </Routes>
    </MemoryRouter>
  ),
};
