import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { http, HttpResponse } from "msw";
import { server } from "@/mock/node";
import CardList from "./CardList";

const renderCardList = () =>
  render(
    <MemoryRouter>
      <CardList />
    </MemoryRouter>
  );

describe("CardList", () => {
  it("카드 목록을 불러오는 동안 스켈레톤을 렌더링한다", async () => {
    server.use(http.get("/cards", async () => new Promise(() => {})));

    renderCardList();

    expect(screen.queryByText("등록된 카드가 없습니다")).not.toBeInTheDocument();
    expect(screen.queryByText("카드 목록을 불러올 수 없어요")).not.toBeInTheDocument();
  });

  it("카드가 없을 때 빈 상태 메시지를 보여준다", async () => {
    server.use(http.get("/cards", () => HttpResponse.json([])));

    renderCardList();

    await screen.findByText("등록된 카드가 없습니다");
    expect(screen.getByText("카드 추가하기")).toBeInTheDocument();
  });

  it("카드 목록을 정상적으로 렌더링한다", async () => {
    server.use(
      http.get("/cards", () =>
        HttpResponse.json([
          { id: "1", issuerCode: "BC카드", number: "4111 1111 1111 1111", expirationDate: "01/25" },
          { id: "2", issuerCode: "신한카드", number: "5123 4567 8901 2346", expirationDate: "12/26" },
        ])
      )
    );

    renderCardList();

    await screen.findByText("BC카드");
    expect(screen.getByText("신한카드")).toBeInTheDocument();
    expect(screen.getByText("보유 카드 (2)")).toBeInTheDocument();
  });

  it("카드 번호를 마스킹해서 보여준다", async () => {
    server.use(
      http.get("/cards", () =>
        HttpResponse.json([
          { id: "1", issuerCode: "BC카드", number: "4111 1111 1111 9999", expirationDate: "01/25" },
        ])
      )
    );

    renderCardList();

    await screen.findByText("4111 **** **** 9999");
  });

  it("카드 조회 실패 시 에러 상태를 보여준다", async () => {
    server.use(http.get("/cards", () => HttpResponse.error()));

    renderCardList();

    await screen.findByText("카드 목록을 불러올 수 없어요");
    expect(screen.getByText("다시 시도")).toBeInTheDocument();
  });

  it("삭제 확인 후 카드가 목록에서 제거된다", async () => {
    const user = userEvent.setup();
    server.use(
      http.get("/cards", () =>
        HttpResponse.json([
          { id: "card-abc", issuerCode: "현대카드", number: "4000 1234 5678 9010", expirationDate: "06/27" },
        ])
      )
    );
    vi.spyOn(window, "confirm").mockReturnValue(true);

    renderCardList();

    await screen.findByText("현대카드");
    await user.click(screen.getByRole("button", { name: "✕" }));

    await waitFor(() => expect(screen.queryByText("현대카드")).not.toBeInTheDocument());
  });

  it("삭제 취소 시 카드가 목록에 유지된다", async () => {
    const user = userEvent.setup();
    server.use(
      http.get("/cards", () =>
        HttpResponse.json([
          { id: "card-xyz", issuerCode: "카카오뱅크", number: "4200 1234 5678 0000", expirationDate: "03/28" },
        ])
      )
    );
    vi.spyOn(window, "confirm").mockReturnValue(false);

    renderCardList();

    await screen.findByText("카카오뱅크");
    await user.click(screen.getByRole("button", { name: "✕" }));

    expect(screen.getByText("카카오뱅크")).toBeInTheDocument();
  });

  it("조회 실패 후 다시 시도 버튼 클릭 시 목록을 다시 불러온다", async () => {
    const user = userEvent.setup();
    let callCount = 0;
    server.use(
      http.get("/cards", () => {
        callCount++;
        if (callCount === 1) return HttpResponse.error();
        return HttpResponse.json([
          { id: "1", issuerCode: "BC카드", number: "4111 1111 1111 1111", expirationDate: "01/25" },
        ]);
      })
    );

    renderCardList();

    await screen.findByText("카드 목록을 불러올 수 없어요");
    await user.click(screen.getByText("다시 시도"));

    await screen.findByText("BC카드");
  });

  it("카드 추가 버튼이 여러 장일 때도 렌더링된다", async () => {
    server.use(
      http.get("/cards", () =>
        HttpResponse.json([
          { id: "1", issuerCode: "BC카드", number: "4111 1111 1111 1111", expirationDate: "01/25" },
        ])
      )
    );

    renderCardList();

    await screen.findByText("BC카드");
    expect(screen.getByText("+ 카드 추가하기")).toBeInTheDocument();
  });
});
