import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CardListPage from "../pages/CardListPage";

import { server } from "../mocks/server";
import { http, HttpResponse } from "msw";

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

test("카드 목록이 있을 때 카드 리스트가 화면에 보인다", async () => {
  server.use(
    http.get("/cards", () =>
      HttpResponse.json([
        {
          id: "1",
          issuerCode: "41",
          number: "411111******1111",
          expirationDate: "12/28",
        },
      ]),
    ),
  );
  render(
    <MemoryRouter>
      <CardListPage />
    </MemoryRouter>,
  );
  expect(
    await screen.findByText("신한카드", {}, { timeout: 3000 }),
  ).toBeInTheDocument();
});

test("카드 목록 조회에 실패하면 에러 안내가 표시된다", async () => {
  server.use(
    http.get("/cards", () => HttpResponse.json(null, { status: 500 })),
  );

  render(
    <MemoryRouter>
      <CardListPage />
    </MemoryRouter>,
  );

  expect(
    await screen.findByText(
      "잠시 후 다시 시도해 주세요",
      {},
      { timeout: 3000 },
    ),
  ).toBeInTheDocument();
});
