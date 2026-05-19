import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Navigate, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";

import { ROUTES } from "../src/constants/routes";
import { store } from "../src/mocks/cardStore";
import CardListPage from "../src/pages/CardListPage";
import CardRegisterationFormPage from "../src/pages/CardRegisterationFormPage";

const renderApp = (initialPath = ROUTES.CARD_FORM) =>
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path={ROUTES.CARD_FORM} element={<CardRegisterationFormPage />} />
        <Route path={ROUTES.CARD_LIST} element={<CardListPage />} />
        <Route path="*" element={<Navigate to={ROUTES.CARD_LIST} replace />} />
      </Routes>
    </MemoryRouter>,
  );

const fillCardForm = async (user: ReturnType<typeof userEvent.setup>, { cvc = "123" } = {}) => {
  // 카드 번호 (Visa 16자리)
  await user.type(screen.getByLabelText("카드 번호 첫번째 칸"), "4111");
  await user.type(screen.getByLabelText("카드 번호 두번째 칸"), "1111");
  await user.type(screen.getByLabelText("카드 번호 세번째 칸"), "1111");
  await user.type(screen.getByLabelText("카드 번호 네번째 칸"), "1111");

  // 카드사 선택
  await user.click(screen.getByText("카드사를 선택해주세요"));
  await user.click(screen.getByText("국민카드"));

  // 만료일
  await user.type(screen.getByLabelText("유효기간 월"), "12");
  await user.type(screen.getByLabelText("유효기간 년도"), "28");

  // CVC
  await user.type(screen.getByLabelText("CVC"), cvc);

  // 비밀번호
  await user.type(screen.getByLabelText("비밀번호 앞 2자리"), "12");
};

beforeEach(() => {
  store.reset();
});

describe("카드 등록 플로우", () => {
  it("카드 정보를 입력하면 목록 페이지에서 등록된 카드를 확인할 수 있다", async () => {
    const user = userEvent.setup();
    renderApp();

    await fillCardForm(user);

    await user.click(screen.getByRole("button", { name: "확인" }));

    await waitFor(() => {
      expect(screen.getByText(/411111\*+1111/)).toBeInTheDocument();
    });
  });

  it("CVC 000 입력 시 서버 에러 메시지가 CVC 필드에 표시된다", async () => {
    const user = userEvent.setup();
    renderApp();

    await fillCardForm(user, { cvc: "000" });

    await user.click(screen.getByRole("button", { name: "확인" }));

    expect(await screen.findByText("유효하지 않은 CVC입니다.")).toBeInTheDocument();

    // 페이지 이동 없음 확인
    expect(screen.getByLabelText("CVC")).toBeInTheDocument();
  });
});
