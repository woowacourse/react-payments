import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test, vi } from "vitest";
import App from "./App";
import { BASE_URL, seedMockCards } from "./mocks/handlers";
import { server } from "./test/server";

const renderApp = (initialRoute: string) => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <App />
    </MemoryRouter>,
  );
};

const fillRegisterForm = async ({ cvc }: { cvc: string }) => {
  const user = userEvent.setup();

  const cardNumberInputs = screen.getAllByRole("textbox");
  await user.type(cardNumberInputs[0], "4111");
  await user.type(cardNumberInputs[1], "1111");
  await user.type(cardNumberInputs[2], "1111");
  await user.type(cardNumberInputs[3], "1111");

  await user.selectOptions(await screen.findByRole("combobox"), "국민카드");

  await user.type(await screen.findByLabelText("유효기간"), "12");
  await user.type(screen.getByPlaceholderText("YY"), "30");

  await user.type(await screen.findByLabelText("CVC"), cvc);
  await user.type(await screen.findByLabelText("비밀번호 앞 2자리"), "12");

  return user;
};

describe("카드 관리 통합 흐름", () => {
  test("POST /cards 성공 후 GET /cards 목록 화면으로 이동한다", async () => {
    renderApp("/register");

    const user = await fillRegisterForm({ cvc: "123" });

    await user.click(await screen.findByRole("button", { name: "확인" }));

    expect(screen.getByRole("button", { name: "등록중..." })).toBeDisabled();
    expect(
      await screen.findByText("보유 카드 (1)", {}, { timeout: 5000 }),
    ).toBeInTheDocument();
    expect(screen.getByText("국민카드")).toBeInTheDocument();
  });

  test("DELETE /cards/:id 성공 후 카드가 목록에서 사라진다", async () => {
    seedMockCards({
      id: "card-1",
      issuerCode: "11",
      number: "4111111111111111",
      expirationDate: "12/30",
    });

    renderApp("/cards");

    expect(
      await screen.findByText("보유 카드 (1)", {}, { timeout: 5000 }),
    ).toBeInTheDocument();
    expect(screen.getByText("국민카드")).toBeInTheDocument();

    const user = userEvent.setup();

    vi.spyOn(window, "confirm").mockReturnValue(true);

    await user.click(screen.getByRole("button", { name: "X" }));

    await waitFor(
      () => {
        expect(screen.queryByText("국민카드")).not.toBeInTheDocument();
      },
      { timeout: 5000 },
    );
    expect(screen.getByText("보유 카드")).toBeInTheDocument();
  });

  test("POST /cards 400 응답을 필드 에러로 보여준다", async () => {
    renderApp("/register");

    const user = await fillRegisterForm({ cvc: "000" });

    await user.click(await screen.findByRole("button", { name: "확인" }));

    expect(screen.getByRole("button", { name: "등록중..." })).toBeDisabled();
    expect(
      await screen.findByText("유효하지 않은 CVC입니다.", {}, { timeout: 5000 }),
    ).toBeInTheDocument();
  });

  test("GET /cards 실패 시 에러 상태와 재시도 액션을 보여준다", async () => {
    server.use(
      http.get(`${BASE_URL}/cards`, () => {
        return HttpResponse.json(
          { message: "카드 목록을 불러오지 못했습니다." },
          { status: 500 },
        );
      }),
    );

    renderApp("/cards");

    expect(
      await screen.findByText("카드 목록을 불러올 수 없어요"),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "다시 시도" })).toBeEnabled();
  });
});
