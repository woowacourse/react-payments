import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { http, HttpResponse } from "msw";
import { server } from "@/mock/node";
import CardForm from "./CardForm";

const renderCardForm = () =>
  render(
    <MemoryRouter initialEntries={["/add"]}>
      <Routes>
        <Route path="/add" element={<CardForm />} />
        <Route path="/complete" element={<div data-testid="complete-page">카드 등록 완료</div>} />
      </Routes>
    </MemoryRouter>
  );

const fillCardNumber = async (user: ReturnType<typeof userEvent.setup>, number = ["4111", "1111", "1111", "1111"]) => {
  const inputs = screen.getAllByPlaceholderText("1234");
  for (let i = 0; i < number.length; i++) {
    await user.type(inputs[i], number[i]);
  }
};

const selectCompany = async (user: ReturnType<typeof userEvent.setup>, company = "BC카드") => {
  await user.click(screen.getByText("카드사를 선택해 주세요"));
  await user.click(screen.getByText(company));
};

const fillExpiryDate = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.type(screen.getByPlaceholderText("MM"), "01");
  await user.type(screen.getByPlaceholderText("YY"), "25");
};

const fillCvc = async (user: ReturnType<typeof userEvent.setup>, cvc = "123") => {
  await user.type(screen.getByPlaceholderText("123"), cvc);
};

const fillPassword = async (user: ReturnType<typeof userEvent.setup>) => {
  const passwordGroup = screen.getByRole("group", { name: "비밀번호 앞 2자리" });
  const passwordInput = passwordGroup.querySelector("input[type='password']")!;
  await user.type(passwordInput, "12");
};

describe("CardForm", () => {
  it("초기 렌더링 시 카드 번호 입력 섹션만 보인다", () => {
    renderCardForm();

    expect(screen.getByText("결제할 카드 번호를 입력해 주세요")).toBeInTheDocument();
    expect(screen.queryByText("카드사를 선택해 주세요.")).not.toBeInTheDocument();
    expect(screen.queryByText("카드 유효기간을 입력해주세요")).not.toBeInTheDocument();
    expect(screen.queryByText("CVC번호를 입력해 주세요")).not.toBeInTheDocument();
    expect(screen.queryByText("비밀번호를 입력해 주세요")).not.toBeInTheDocument();
  });

  it("유효한 카드 번호 입력 후 카드사 선택 섹션이 나타난다", async () => {
    const user = userEvent.setup();
    renderCardForm();

    await fillCardNumber(user);

    await screen.findByText("카드사를 선택해 주세요.");
  });

  it("카드사 선택 후 유효기간 입력 섹션이 나타난다", async () => {
    const user = userEvent.setup();
    renderCardForm();

    await fillCardNumber(user);
    await screen.findByText("카드사를 선택해 주세요.");
    await selectCompany(user);

    await screen.findByText("카드 유효기간을 입력해주세요");
  });

  it("유효기간 입력 후 CVC 입력 섹션이 나타난다", async () => {
    const user = userEvent.setup();
    renderCardForm();

    await fillCardNumber(user);
    await screen.findByText("카드사를 선택해 주세요.");
    await selectCompany(user);
    await screen.findByText("카드 유효기간을 입력해주세요");
    await fillExpiryDate(user);

    await screen.findByText("CVC번호를 입력해 주세요");
  });

  it("CVC 입력 후 비밀번호 입력 섹션이 나타난다", async () => {
    const user = userEvent.setup();
    renderCardForm();

    await fillCardNumber(user);
    await screen.findByText("카드사를 선택해 주세요.");
    await selectCompany(user);
    await screen.findByText("카드 유효기간을 입력해주세요");
    await fillExpiryDate(user);
    await screen.findByText("CVC번호를 입력해 주세요");
    await fillCvc(user);

    await screen.findByText("비밀번호를 입력해 주세요");
  });

  it("모든 필드 입력 완료 시 확인 버튼이 나타난다", async () => {
    const user = userEvent.setup();
    renderCardForm();

    await fillCardNumber(user);
    await screen.findByText("카드사를 선택해 주세요.");
    await selectCompany(user);
    await screen.findByText("카드 유효기간을 입력해주세요");
    await fillExpiryDate(user);
    await screen.findByText("CVC번호를 입력해 주세요");
    await fillCvc(user);
    await screen.findByText("비밀번호를 입력해 주세요");
    await fillPassword(user);

    expect(screen.getByRole("button", { name: "확인" })).toBeInTheDocument();
  });

  it("정상 제출 시 완료 페이지로 이동한다", async () => {
    const user = userEvent.setup();
    renderCardForm();

    await fillCardNumber(user);
    await screen.findByText("카드사를 선택해 주세요.");
    await selectCompany(user);
    await screen.findByText("카드 유효기간을 입력해주세요");
    await fillExpiryDate(user);
    await screen.findByText("CVC번호를 입력해 주세요");
    await fillCvc(user);
    await screen.findByText("비밀번호를 입력해 주세요");
    await fillPassword(user);

    await user.click(screen.getByRole("button", { name: "확인" }));

    await screen.findByTestId("complete-page");
  });

  it("카드 번호 입력 없이 blur 시 에러 메시지가 표시된다", async () => {
    const user = userEvent.setup();
    renderCardForm();

    const firstInput = screen.getAllByPlaceholderText("1234")[0];
    await user.click(firstInput);
    await user.tab();

    await screen.findByText("카드 번호를 입력해주세요");
  });

  it("유효기간 입력 없이 blur 시 에러 메시지가 표시된다", async () => {
    const user = userEvent.setup();
    renderCardForm();

    await fillCardNumber(user);
    await screen.findByText("카드사를 선택해 주세요.");
    await selectCompany(user);
    await screen.findByText("카드 유효기간을 입력해주세요");

    const monthInput = screen.getByPlaceholderText("MM");
    await user.click(monthInput);
    await user.tab();

    await screen.findByText("유효기간을 입력해주세요");
  });

  it("CVC 입력 없이 blur 시 에러 메시지가 표시된다", async () => {
    const user = userEvent.setup();
    renderCardForm();

    await fillCardNumber(user);
    await screen.findByText("카드사를 선택해 주세요.");
    await selectCompany(user);
    await screen.findByText("카드 유효기간을 입력해주세요");
    await fillExpiryDate(user);
    await screen.findByText("CVC번호를 입력해 주세요");

    const cvcInput = screen.getByPlaceholderText("123");
    await user.click(cvcInput);
    await user.tab();

    await screen.findByText("CVC를 입력해주세요");
  });

  it("서버에서 CVC 오류 반환 시 에러 메시지가 표시된다", async () => {
    const user = userEvent.setup();
    server.use(
      http.post("/cards", () =>
        HttpResponse.json(
          { code: "INVALID_CVC", message: "유효하지 않은 CVC입니다." },
          { status: 400 }
        )
      )
    );

    renderCardForm();

    await fillCardNumber(user);
    await screen.findByText("카드사를 선택해 주세요.");
    await selectCompany(user);
    await screen.findByText("카드 유효기간을 입력해주세요");
    await fillExpiryDate(user);
    await screen.findByText("CVC번호를 입력해 주세요");
    await fillCvc(user, "000");
    await screen.findByText("비밀번호를 입력해 주세요");
    await fillPassword(user);

    await user.click(screen.getByRole("button", { name: "확인" }));

    await screen.findByText("유효하지 않은 CVC입니다.");
  });

  it("서버에서 카드 번호 오류 반환 시 에러 메시지가 표시된다", async () => {
    const user = userEvent.setup();
    server.use(
      http.post("/cards", () =>
        HttpResponse.json(
          { code: "INVALID_CARD_NUMBER", message: "유효하지 않은 카드 번호입니다." },
          { status: 400 }
        )
      )
    );

    renderCardForm();

    await fillCardNumber(user);
    await screen.findByText("카드사를 선택해 주세요.");
    await selectCompany(user);
    await screen.findByText("카드 유효기간을 입력해주세요");
    await fillExpiryDate(user);
    await screen.findByText("CVC번호를 입력해 주세요");
    await fillCvc(user);
    await screen.findByText("비밀번호를 입력해 주세요");
    await fillPassword(user);
    await user.click(screen.getByRole("button", { name: "확인" }));

    await screen.findByText("유효하지 않은 카드 번호입니다.");
  });

  it("서버에서 유효기간 오류 반환 시 에러 메시지가 표시된다", async () => {
    const user = userEvent.setup();
    server.use(
      http.post("/cards", () =>
        HttpResponse.json(
          { code: "INVALID_EXPIRATION_DATE", message: "유효하지 않은 만료일입니다." },
          { status: 400 }
        )
      )
    );

    renderCardForm();

    await fillCardNumber(user);
    await screen.findByText("카드사를 선택해 주세요.");
    await selectCompany(user);
    await screen.findByText("카드 유효기간을 입력해주세요");
    await fillExpiryDate(user);
    await screen.findByText("CVC번호를 입력해 주세요");
    await fillCvc(user);
    await screen.findByText("비밀번호를 입력해 주세요");
    await fillPassword(user);
    await user.click(screen.getByRole("button", { name: "확인" }));

    await screen.findByText("유효하지 않은 만료일입니다.");
  });

  it("서버 CVC 오류 발생 후 CVC 수정 시 에러 메시지가 사라진다", async () => {
    const user = userEvent.setup();
    server.use(
      http.post("/cards", () =>
        HttpResponse.json(
          { code: "INVALID_CVC", message: "유효하지 않은 CVC입니다." },
          { status: 400 }
        )
      )
    );

    renderCardForm();

    await fillCardNumber(user);
    await screen.findByText("카드사를 선택해 주세요.");
    await selectCompany(user);
    await screen.findByText("카드 유효기간을 입력해주세요");
    await fillExpiryDate(user);
    await screen.findByText("CVC번호를 입력해 주세요");
    await fillCvc(user, "000");
    await screen.findByText("비밀번호를 입력해 주세요");
    await fillPassword(user);
    await user.click(screen.getByRole("button", { name: "확인" }));
    await screen.findByText("유효하지 않은 CVC입니다.");

    const cvcInput = screen.getByPlaceholderText("123");
    await user.clear(cvcInput);
    await user.type(cvcInput, "1");

    await waitFor(() => expect(screen.queryByText("유효하지 않은 CVC입니다.")).not.toBeInTheDocument());
  });
});
