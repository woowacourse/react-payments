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

test("카드가 없으면 빈 목록 안내가 표시된다", async () => {
  render(
    <MemoryRouter>
      <CardListPage />
    </MemoryRouter>,
  );
  expect(
    await screen.findByText("등록된 카드가 없습니다", {}, { timeout: 3000 }),
  ).toBeInTheDocument();
});
