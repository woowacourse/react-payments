import { MemoryRouter, Routes, Route } from "react-router";
import type { Decorator } from "@storybook/react-vite";
import CardCreateComplete from "../CardCreateComplete";

export const withCardRouter: Decorator = (Story) => (
  <MemoryRouter initialEntries={["/card"]}>
    <Routes>
      <Route path="/card" element={<Story />} />
      <Route path="/card/done" element={<CardCreateComplete />} />
    </Routes>
  </MemoryRouter>
);
