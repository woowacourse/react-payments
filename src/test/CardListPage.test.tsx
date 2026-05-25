import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "@/App";
import { server } from "@/mocks/server";
import { delay, http, HttpResponse } from "msw";
import { beforeEach, describe, expect, it, vi } from "vitest";

const card = {
  id: "card-id",
  issuerCode: "41",
  maskedNumber: "551112******9012",
  expirationDate: "12/28",
};

describe("카드 목록 페이지", () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/cards");
  });

  it("카드 목록을 불러오는 동안 로딩 상태를 보여준다", () => {
    server.use(
      http.get("/cards", async () => {
        await delay(100);

        return HttpResponse.json([]);
      }),
    );

    render(<App />);

    expect(
      screen.getByRole("status", { name: "카드 목록 불러오는 중" }),
    ).toBeInTheDocument();
  });

  it("카드 목록이 비어 있으면 카드 등록 안내를 보여준다", async () => {
    render(<App />);

    expect(
      await screen.findByText("등록된 카드가 없습니다"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("아래 버튼을 눌러 첫 카드를 등록해보세요"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "카드 추가하기" }),
    ).toBeInTheDocument();
  });

  it("카드 목록 조회에 성공하면 보유 카드 정보를 보여준다", async () => {
    server.use(http.get("/cards", () => HttpResponse.json([card])));

    render(<App />);

    expect(await screen.findByText("보유 카드 (1)")).toBeInTheDocument();
    expect(screen.getByText("신한카드")).toBeInTheDocument();
    expect(screen.getByText("5511 12** **** 9012")).toBeInTheDocument();
    expect(screen.getByText("유효기간 12/28")).toBeInTheDocument();
  });

  it("카드 목록 조회에 실패하면 에러 상태를 보여주고 재시도할 수 있다", async () => {
    let requestCount = 0;

    server.use(
      http.get("/cards", () => {
        requestCount += 1;

        if (requestCount === 1) {
          return new HttpResponse(null, { status: 500 });
        }

        return HttpResponse.json([card]);
      }),
    );

    render(<App />);

    expect(
      await screen.findByText("카드 목록을 불러올 수 없어요"),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "다시 시도" }));

    expect(await screen.findByText("신한카드")).toBeInTheDocument();
  });

  it("삭제를 확인하면 카드를 목록에서 제거한다", async () => {
    const cards = [card];
    const confirmSpy = vi.spyOn(window, "confirm").mockReturnValue(true);

    server.use(
      http.get("/cards", () => HttpResponse.json(cards)),
      http.delete("/cards/:cardId", ({ params }) => {
        const { cardId } = params;
        const targetIndex = cards.findIndex((card) => card.id === cardId);

        if (targetIndex !== -1) {
          cards.splice(targetIndex, 1);
        }

        return new HttpResponse(null, { status: 204 });
      }),
    );

    render(<App />);

    expect(await screen.findByText("신한카드")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "카드 삭제" }));

    expect(confirmSpy).toHaveBeenCalledWith("카드를 삭제하시겠습니까?");
    expect(
      await screen.findByText("등록된 카드가 없습니다"),
    ).toBeInTheDocument();
  });

  it("삭제를 취소하면 카드를 목록에서 제거하지 않는다", async () => {
    const confirmSpy = vi.spyOn(window, "confirm").mockReturnValue(false);

    server.use(http.get("/cards", () => HttpResponse.json([card])));

    render(<App />);

    expect(await screen.findByText("신한카드")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "카드 삭제" }));

    expect(confirmSpy).toHaveBeenCalledWith("카드를 삭제하시겠습니까?");
    expect(screen.getByText("신한카드")).toBeInTheDocument();
  });
});
