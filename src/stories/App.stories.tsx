import type { Meta, StoryObj } from "@storybook/react";
import App from "../App";
import { MemoryRouter, Routes, Route } from "react-router";

const meta = {
  title: "Pages/App",
  component: App,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </MemoryRouter>
  ),
};
