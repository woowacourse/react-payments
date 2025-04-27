import type { Meta, StoryObj } from "@storybook/react";
import CardRegistrationStartPage from "../pages/home/CardRegistrationStartPage";
import { MemoryRouter, Routes, Route } from "react-router";

const meta = {
  title: "Pages/CardRegistrationStartPage",
  component: CardRegistrationStartPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardRegistrationStartPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <MemoryRouter initialEntries={["/start"]}>
      <Routes>
        <Route path="/start" element={<CardRegistrationStartPage />} />
      </Routes>
    </MemoryRouter>
  ),
};
