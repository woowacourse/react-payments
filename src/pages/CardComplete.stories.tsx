import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CardComplete from "./CardComplete";

const meta: Meta<typeof CardComplete> = {
  title: "Pages/CardComplete",
  component: CardComplete,
};

export default meta;
type Story = StoryObj<typeof CardComplete>;

const withRouter = (first: string, cardFirmLabel: string) => () =>
  (
    <MemoryRouter
      initialEntries={[{ pathname: "/complete", state: { first, cardFirmLabel } }]}
    >
      <Routes>
        <Route path="/complete" element={<CardComplete />} />
      </Routes>
    </MemoryRouter>
  );

export const Default: Story = {
  render: withRouter("5511", "BC카드"),
};

export const KakaoBank: Story = {
  render: withRouter("4123", "카카오뱅크"),
};
