import { screen, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import { server } from "@/mock/server";
import { renderApp } from "@/test/renderApp";

describe("CardsPage", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("진입 시 카드 목록을 불러와 '보유 카드 (n)' 헤더와 카드 항목을 렌더링한다", async () => {
    renderApp(["/cards"]);

    await waitFor(() => {
      expect(screen.getByText("보유 카드 (2)")).toBeInTheDocument();
    });
    expect(screen.getByText("BC카드")).toBeInTheDocument();
    expect(screen.getByText("신한카드")).toBeInTheDocument();
  });

  it("빈 응답이면 '등록된 카드가 없습니다.' 안내와 카드 추가 버튼을 보여준다", async () => {
    server.use(http.get("/api/cards", () => HttpResponse.json([])));

    renderApp(["/cards"]);

    await waitFor(() => {
      expect(
        screen.getByText("등록된 카드가 없습니다."),
      ).toBeInTheDocument();
    });
    expect(
      screen.getByRole("button", { name: /카드 추가/ }),
    ).toBeInTheDocument();
  });

  it("서버 에러 시 에러 안내와 '다시 시도' 버튼을 보여준다", async () => {
    server.use(
      http.get(
        "/api/cards",
        () => new HttpResponse(null, { status: 500 }),
      ),
    );

    renderApp(["/cards"]);

    expect(
      await screen.findByRole("button", { name: "다시 시도" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("카드 목록을 불러올 수 없어요"),
    ).toBeInTheDocument();
  });

  it("삭제 버튼 클릭 시 confirm을 확인하면 DELETE 요청을 보내고 페이지를 새로고침한다", async () => {
    vi.spyOn(window, "confirm").mockReturnValue(true);
    const reloadSpy = vi.fn();
    Object.defineProperty(window, "location", {
      configurable: true,
      value: { ...window.location, reload: reloadSpy },
    });

    const deleteSpy = vi.fn();
    server.use(
      http.delete("/api/cards/:id", ({ params }) => {
        deleteSpy(params.id);
        return new HttpResponse(null, { status: 204 });
      }),
    );

    const { user } = renderApp(["/cards"]);

    await waitFor(() => {
      expect(screen.getByText("보유 카드 (2)")).toBeInTheDocument();
    });

    const [firstDeleteButton] = screen.getAllByRole("button", { name: "x" });
    await user.click(firstDeleteButton);

    await waitFor(() => {
      expect(deleteSpy).toHaveBeenCalledWith(
        "550e8400-e29b-41d4-a716-446655440000",
      );
    });
    expect(reloadSpy).toHaveBeenCalledTimes(1);
  });

  it("삭제 버튼 클릭 시 confirm을 취소하면 DELETE 요청을 보내지 않는다", async () => {
    vi.spyOn(window, "confirm").mockReturnValue(false);

    const deleteSpy = vi.fn();
    server.use(
      http.delete("/api/cards/:id", ({ params }) => {
        deleteSpy(params.id);
        return new HttpResponse(null, { status: 204 });
      }),
    );

    const { user } = renderApp(["/cards"]);

    await waitFor(() => {
      expect(screen.getByText("보유 카드 (2)")).toBeInTheDocument();
    });

    const [firstDeleteButton] = screen.getAllByRole("button", { name: "x" });
    await user.click(firstDeleteButton);

    expect(window.confirm).toHaveBeenCalledTimes(1);
    expect(deleteSpy).not.toHaveBeenCalled();
  });
});
