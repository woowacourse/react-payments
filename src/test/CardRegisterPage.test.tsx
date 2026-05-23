import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { http, HttpResponse } from "msw";
import { describe, test, expect } from "vitest";
import { server } from "../mocks/server";
import App from "../App";

function renderRegisterPage() {
  return render(
    <MemoryRouter initialEntries={["/cards/register"]}>
      <App />
    </MemoryRouter>,
  );
}

async function fillCardForm(user: ReturnType<typeof userEvent.setup>) {
  // 1. 카드 번호 앞 4자리 입력 → MasterCard 브랜드 감지 → 세그먼트 분리
  await user.type(
    screen.getByPlaceholderText("카드 번호를 입력해 주세요"),
    "5511",
  );

  // 2. 나머지 세그먼트 입력 (segments[0] = '5511'은 이미 채워진 상태)
  const segments = screen.getAllByPlaceholderText("1111");
  await user.type(segments[1], "1234");
  await user.type(segments[2], "5678");
  await user.type(segments[3], "9012");

  // 3. 카드사 선택 (카드 번호 완성 후 카드사 선택 섹션 노출)
  await user.click(screen.getByText("카드사를 선택해주세요"));
  await user.click(screen.getByText("BC카드"));

  // 4. 유효기간 입력 (카드사 선택 후 유효기간 섹션 노출)
  await user.type(screen.getByPlaceholderText("MM"), "12");
  await user.type(screen.getByPlaceholderText("YY"), "28");

  // 5. CVC 입력 (유효기간 완성 후 CVC 섹션 노출)
  await user.type(screen.getByPlaceholderText("CVC"), "123");

  // 6. 비밀번호 입력 (CVC 완성 후 비밀번호 섹션 노출)
  const passwordInput = document.querySelector(
    "input[type='password']",
  ) as HTMLElement;
  await user.type(passwordInput, "12");
}

describe("카드 등록 페이지", () => {
  test("등록 성공(201) 시 카드 목록 페이지(/cards)로 이동한다", async () => {
    const user = userEvent.setup();

    server.use(
      http.post("/react-payments/cards", () =>
        HttpResponse.json({ id: "new-card-id" }, { status: 201 }),
      ),
      http.get("/react-payments/cards", () => HttpResponse.json([])),
    );

    renderRegisterPage();
    await fillCardForm(user);

    await user.click(screen.getByRole("button", { name: "확인" }));

    // /cards로 이동 후 대시보드 타이틀 확인
    expect(await screen.findByText(/보유 카드/)).toBeInTheDocument();
  });

  test("등록 실패(400) INVALID_CVC: CVC 필드에 에러 메시지를 표시한다", async () => {
    const user = userEvent.setup();

    server.use(
      http.post("/react-payments/cards", () =>
        HttpResponse.json(
          { code: "INVALID_CVC", message: "유효하지 않은 CVC입니다." },
          { status: 400 },
        ),
      ),
    );

    renderRegisterPage();
    await fillCardForm(user);

    await user.click(screen.getByRole("button", { name: "확인" }));

    expect(
      await screen.findByText("유효하지 않은 CVC입니다."),
    ).toBeInTheDocument();
  });

  test("등록 실패(400) INVALID_CARD_NUMBER: 카드 번호 필드에 에러 메시지를 표시한다", async () => {
    const user = userEvent.setup();

    server.use(
      http.post("/react-payments/cards", () =>
        HttpResponse.json(
          { code: "INVALID_CARD_NUMBER", message: "유효하지 않은 카드 번호입니다." },
          { status: 400 },
        ),
      ),
    );

    renderRegisterPage();
    await fillCardForm(user);

    await user.click(screen.getByRole("button", { name: "확인" }));

    expect(
      await screen.findByText("유효하지 않은 카드 번호입니다."),
    ).toBeInTheDocument();
  });

  test("등록 실패(400) INVALID_EXPIRATION_DATE: 만료일 필드에 에러 메시지를 표시한다", async () => {
    const user = userEvent.setup();

    server.use(
      http.post("/react-payments/cards", () =>
        HttpResponse.json(
          { code: "INVALID_EXPIRATION_DATE", message: "유효하지 않은 만료일입니다." },
          { status: 400 },
        ),
      ),
    );

    renderRegisterPage();
    await fillCardForm(user);

    await user.click(screen.getByRole("button", { name: "확인" }));

    expect(
      await screen.findByText("유효하지 않은 만료일입니다."),
    ).toBeInTheDocument();
  });
});
