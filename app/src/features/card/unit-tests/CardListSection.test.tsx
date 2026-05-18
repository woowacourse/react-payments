/**
 * @jest-environment <rootDir>/jsdom-env.cjs
 */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router";
import CardListSection from "../components/CardListSection";

const CARDS = [
  {
    id: "card-1",
    issuerCode: "31",
    number: "4111111111111111",
    expirationDate: "12/28",
    cvc: "777",
  },
  {
    id: "card-2",
    issuerCode: "11",
    number: "5200828282828210",
    expirationDate: "06/27",
    cvc: "123",
  },
];

function renderCardListSection(cards = [], status: "pending" | "empty" | "success" | "error" = cards.length ? "success" : "empty") {
  const user = userEvent.setup();
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<CardListSection cards={cards} status={status} />} />
        <Route path="/card/create/" element={<div>카드 추가 페이지</div>} />
      </Routes>
    </MemoryRouter>,
  );
  return { user };
}

describe("CardListSection 통합 테스트", () => {
  test("카드가 없을 때 빈 상태 UI가 렌더링된다", () => {
    renderCardListSection([]);

    expect(screen.getByText("등록된 카드가 없습니다")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "카드 추가하기" })).toBeInTheDocument();
  });

  test("카드가 있을 때 카드 목록이 렌더링된다", () => {
    renderCardListSection(CARDS);

    expect(screen.queryByText("등록된 카드가 없습니다")).not.toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(CARDS.length);
  });

  test("빈 상태에서 카드 추가하기 클릭 시 카드 추가 페이지로 이동한다", async () => {
    const { user } = renderCardListSection([]);

    await user.click(screen.getByRole("button", { name: "카드 추가하기" }));

    expect(screen.getByText("카드 추가 페이지")).toBeInTheDocument();
  });
});
