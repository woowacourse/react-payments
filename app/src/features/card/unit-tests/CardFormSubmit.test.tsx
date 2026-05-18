/**
 * @jest-environment <rootDir>/jsdom-env.cjs
 */
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router";
import CardCreate from "../components/CardCreate";

function renderCardCreate() {
  const user = userEvent.setup();
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<CardCreate />} />
        <Route path="/card/done" element={<div>카드 생성 완료</div>} />
      </Routes>
    </MemoryRouter>,
  );
  return { user };
}

async function fillCompleteForm(
  user: ReturnType<typeof userEvent.setup>,
  { cvc = "777" }: { cvc?: string } = {},
) {
  const [first, second, third, fourth] = screen.getAllByPlaceholderText("1234");
  await user.type(first, "4111");
  await user.type(second, "1111");
  await user.type(third, "1111");
  await user.type(fourth, "1111");

  await user.selectOptions(
    screen.getByRole("combobox", { name: "select card brand", hidden: true }),
    "bc",
  );

  await user.type(screen.getByPlaceholderText("MM"), "12");
  await user.type(screen.getByPlaceholderText("YY"), "28");
  await user.type(screen.getByLabelText("CVC"), cvc);
  await user.type(screen.getByPlaceholderText("비밀번호"), "12");
}

describe("CardForm 폼 제출 - API 에러 처리", () => {
  test("API 에러 응답 시 CVC 필드에 에러 메시지가 렌더링된다", async () => {
    const { user } = renderCardCreate();

    await fillCompleteForm(user, { cvc: "000" });
    await user.click(screen.getByRole("button", { name: "확인" }));

    await waitFor(() => {
      expect(screen.getByText("유효하지 않은 CVC입니다.")).toBeInTheDocument();
    });
  });

  test("API 성공 응답 시 완료 페이지로 이동한다", async () => {
    const { user } = renderCardCreate();

    await fillCompleteForm(user, { cvc: "777" });
    await user.click(screen.getByRole("button", { name: "확인" }));

    await waitFor(() => {
      expect(screen.getByText("카드 생성 완료")).toBeInTheDocument();
    });
  });
});
