import { MemoryRouter, Routes, Route } from "react-router";
import CardCreateComplete from "../CardCreateComplete";

export const withCardRouter = (Story) => (
  <MemoryRouter initialEntries={["/card"]}>
    <Routes>
      <Route path="/card" element={<Story />} />
      <Route path="/card/done" element={<CardCreateComplete />} />
    </Routes>
  </MemoryRouter>
);
