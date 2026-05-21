import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import CardListPage from "../pages/CardListPage";

import { server } from "../mocks/server";
import { http, HttpResponse } from "msw";

const CARD_FIXTURE = {
  id: "card-1",
  issuerCode: "41",
  number: "411111******1111",
  expirationDate: "12/28",
};

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
    http.get("/cards", () => HttpResponse.json([CARD_FIXTURE])),
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
    await screen.findByText("잠시 후 다시 시도해 주세요", {}, { timeout: 3000 }),
  ).toBeInTheDocument();
});

test("에러 상태에서 다시 시도 버튼을 클릭하면 카드 목록을 다시 불러온다", async () => {
  const user = userEvent.setup();

  server.use(
    http.get("/cards", () => HttpResponse.json(null, { status: 500 })),
  );

  render(
    <MemoryRouter>
      <CardListPage />
    </MemoryRouter>,
  );

  await screen.findByText("잠시 후 다시 시도해 주세요", {}, { timeout: 3000 });

  server.use(
    http.get("/cards", () => HttpResponse.json([CARD_FIXTURE])),
  );

  await user.click(screen.getByRole("button", { name: "다시 시도" }));

  expect(
    await screen.findByText("신한카드", {}, { timeout: 3000 }),
  ).toBeInTheDocument();
});

test("삭제 confirm 취소 시 DELETE 요청이 발생하지 않는다", async () => {
  const user = userEvent.setup();

  server.use(
    http.get("/cards", () => HttpResponse.json([CARD_FIXTURE])),
  );

  let deleteWasCalled = false;
  server.use(
    http.delete("/cards/:id", () => {
      deleteWasCalled = true;
      return new HttpResponse(null, { status: 204 });
    }),
  );

  vi.spyOn(window, "confirm").mockReturnValue(false);

  render(
    <MemoryRouter>
      <CardListPage />
    </MemoryRouter>,
  );

  await screen.findByText("신한카드", {}, { timeout: 3000 });

  await user.click(screen.getByRole("img", { name: "삭제" }));

  expect(deleteWasCalled).toBe(false);
  expect(screen.getByText("신한카드")).toBeInTheDocument();
});

test("삭제 confirm 확인 시 DELETE 요청 후 목록이 갱신된다", async () => {
  const user = userEvent.setup();

  let fetchCount = 0;
  server.use(
    http.get("/cards", () => {
      fetchCount++;
      if (fetchCount === 1) return HttpResponse.json([CARD_FIXTURE]);
      return HttpResponse.json([]);
    }),
    http.delete("/cards/:id", () => new HttpResponse(null, { status: 204 })),
  );

  vi.spyOn(window, "confirm").mockReturnValue(true);

  render(
    <MemoryRouter>
      <CardListPage />
    </MemoryRouter>,
  );

  await screen.findByText("신한카드", {}, { timeout: 3000 });

  await user.click(screen.getByRole("img", { name: "삭제" }));

  await waitFor(
    () => expect(screen.queryByText("신한카드")).not.toBeInTheDocument(),
    { timeout: 3000 },
  );
});
