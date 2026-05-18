import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { http, HttpResponse } from "msw";
import { describe, test, expect, vi } from "vitest";
import { server } from "../mocks/server";
import App from "../App";

const mockCard = {
  id: "card-1",
  issuerCode: "41",
  number: "411111******1111",
  expirationDate: "12/28",
};

function renderDashboard() {
  return render(
    <MemoryRouter initialEntries={["/cards"]}>
      <App />
    </MemoryRouter>,
  );
}

describe("카드 목록 페이지 - 비동기 상태별 UI", () => {
  test("loading 상태: 스피너를 표시한다", () => {
    server.use(
      http.get("/react-payments/cards", () => new Promise(() => {})),
    );

    renderDashboard();

    expect(screen.getByText("로딩중")).toBeInTheDocument();
  });

  test("success 상태 (목록 있음): 카드 정보를 표시한다", async () => {
    server.use(
      http.get("/react-payments/cards", () =>
        HttpResponse.json([mockCard]),
      ),
    );

    renderDashboard();

    expect(await screen.findByText("신한카드")).toBeInTheDocument();
    expect(screen.getByText("4111 **** **** 1111")).toBeInTheDocument();
  });

  test("error 상태: 에러 메시지와 다시 시도 버튼을 표시한다", async () => {
    server.use(
      http.get("/react-payments/cards", () => HttpResponse.error()),
    );

    renderDashboard();

    expect(
      await screen.findByText(/카드 목록을 불러올 수 없/i),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "다시 시도" })).toBeInTheDocument();
  });
});

describe("카드 목록 페이지 - 빈 목록", () => {
  test("등록된 카드가 없을 때 안내 문구를 표시한다", async () => {
    server.use(
      http.get("/react-payments/cards", () => HttpResponse.json([])),
    );

    renderDashboard();

    expect(
      await screen.findByText("등록된 카드가 없습니다"),
    ).toBeInTheDocument();
  });
});

describe("카드 삭제", () => {
  test("확인 클릭 시 DELETE 요청 후 목록에서 카드를 제거한다", async () => {
    const user = userEvent.setup();
    let deleteWasCalled = false;

    server.use(
      http.get("/react-payments/cards", () => HttpResponse.json([mockCard])),
      http.delete("/react-payments/cards/card-1", () => {
        deleteWasCalled = true;
        return new HttpResponse(null, { status: 204 });
      }),
    );
    vi.spyOn(window, "confirm").mockReturnValue(true);

    renderDashboard();

    await screen.findByText("신한카드");
    await user.click(screen.getByRole("button", { name: "✕" }));

    expect(deleteWasCalled).toBe(true);
    expect(screen.queryByText("신한카드")).not.toBeInTheDocument();
  });

  test("취소 클릭 시 DELETE 요청을 보내지 않는다", async () => {
    const user = userEvent.setup();
    let deleteWasCalled = false;

    server.use(
      http.get("/react-payments/cards", () => HttpResponse.json([mockCard])),
      http.delete("/react-payments/cards/card-1", () => {
        deleteWasCalled = true;
        return new HttpResponse(null, { status: 204 });
      }),
    );
    vi.spyOn(window, "confirm").mockReturnValue(false);

    renderDashboard();

    await screen.findByText("신한카드");
    await user.click(screen.getByRole("button", { name: "✕" }));

    expect(deleteWasCalled).toBe(false);
    expect(screen.getByText("신한카드")).toBeInTheDocument();
  });
});
