import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CardListPage from "../pages/CardListPage";

test("카드 목록을 불러오는 동안 스켈레톤이 표시된다", () => {
  render(
    <MemoryRouter>
      <CardListPage />
    </MemoryRouter>,
  );

  expect(screen.getByTestId("card-list-skeleton")).toBeInTheDocument();
});
