import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import CardRegisterPage from "../pages/CardRegisterPage";

import { server } from "../mocks/server";
import { http, HttpResponse } from "msw";

async function fillCardForm(user: ReturnType<typeof userEvent.setup>) {
  // 카드 번호 (Visa: 4xxx로 시작)
  const cardInputs = screen.getAllByPlaceholderText("1234");
  await user.type(cardInputs[0], "4111");
  await user.type(cardInputs[1], "1111");
  await user.type(cardInputs[2], "1111");
  await user.type(cardInputs[3], "1111");

  // 카드사 선택
  await user.click(await screen.findByRole("combobox"));
  await user.click(await screen.findByText("신한카드"));

  // 유효기간
  await user.type(screen.getByPlaceholderText("MM"), "12");
  await user.type(screen.getByPlaceholderText("YY"), "28");

  // CVC
  const cvcInput = await screen.findByPlaceholderText("123");
  await user.type(cvcInput, "123");

  // 비밀번호 (type="password"로 구분)
  const allPlaceholder123 = screen.getAllByPlaceholderText("123");
  const passwordInput = allPlaceholder123.find(
    (el) => el.getAttribute("type") === "password",
  ) as HTMLElement;
  await user.type(passwordInput, "12");
}

test("카드 등록 성공(201) 시 목록 페이지로 이동한다", async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter initialEntries={["/register"]}>
      <Routes>
        <Route path="/register" element={<CardRegisterPage />} />
        <Route path="/cards" element={<div>카드 목록 페이지</div>} />
      </Routes>
    </MemoryRouter>,
  );

  await fillCardForm(user);

  await user.click(screen.getByRole("button", { name: "확인" }));

  expect(
    await screen.findByText("카드 목록 페이지", {}, { timeout: 3000 }),
  ).toBeInTheDocument();
});

test("카드 등록 시 400 응답이 오면 해당 필드 에러 메시지가 표시된다", async () => {
  const user = userEvent.setup();

  server.use(
    http.post("/cards", () =>
      HttpResponse.json(
        { code: "INVALID_CVC", message: "유효하지 않은 CVC입니다." },
        { status: 400 },
      ),
    ),
  );

  render(
    <MemoryRouter initialEntries={["/register"]}>
      <Routes>
        <Route path="/register" element={<CardRegisterPage />} />
        <Route path="/cards" element={<div>카드 목록 페이지</div>} />
      </Routes>
    </MemoryRouter>,
  );

  await fillCardForm(user);

  await user.click(screen.getByRole("button", { name: "확인" }));

  expect(
    await screen.findByText("유효하지 않은 CVC입니다.", {}, { timeout: 3000 }),
  ).toBeInTheDocument();
});
