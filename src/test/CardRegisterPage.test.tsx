import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, Navigate, RouterProvider } from "react-router";
import CardRegisterPage from "@/pages/CardRegisterPage";
import CardRegisterCompletePage from "@/pages/CardRegisterCompletePage";
import { ROUTE_PATH } from "@/constants/routes";
import { describe, expect, it } from "vitest";

const renderCardRegisterPage = () => {
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: <Navigate to={ROUTE_PATH.CARD_REGISTER} replace />,
      },
      {
        path: ROUTE_PATH.CARD_REGISTER,
        element: <CardRegisterPage />,
      },
      {
        path: ROUTE_PATH.CARD_REGISTER_COMPLETE,
        element: <CardRegisterCompletePage />,
      },
    ],
    {
      initialEntries: [ROUTE_PATH.CARD_REGISTER],
    },
  );

  render(<RouterProvider router={router} />);
};

const fillCardRegisterForm = async ({ cvc = "123" } = {}) => {
  const user = userEvent.setup();

  const cardNumberInputs = screen.getAllByPlaceholderText("1234");
  await user.type(cardNumberInputs[0], "4111");
  await user.type(cardNumberInputs[1], "1111");
  await user.type(cardNumberInputs[2], "1111");
  await user.type(cardNumberInputs[3], "1111");

  await user.click(
    screen.getByRole("button", { name: "카드사를 선택해주세요" }),
  );
  await user.click(screen.getByRole("button", { name: "신한카드" }));

  await user.type(screen.getByPlaceholderText("MM"), "12");
  await user.type(screen.getByPlaceholderText("YY"), "30");
  await user.type(screen.getByPlaceholderText("123"), cvc);
  await user.type(screen.getByPlaceholderText("••"), "12");

  return user;
};

describe("카드 등록 페이지", () => {
  it("카드 정보를 입력하고 제출하면 등록 완료 화면을 보여준다", async () => {
    renderCardRegisterPage();

    const user = await fillCardRegisterForm();

    await user.click(screen.getByRole("button", { name: "확인" }));

    expect(
      await screen.findByText((_, element) => {
        return (
          element?.textContent === "4111로 시작하는신한카드가 등록되었어요."
        );
      }),
    ).toBeInTheDocument();
  });

  it("카드 등록에 실패하면 서버 에러 메시지를 보여준다", async () => {
    renderCardRegisterPage();

    const user = await fillCardRegisterForm({ cvc: "000" });

    await user.click(screen.getByRole("button", { name: "확인" }));

    expect(
      await screen.findByText("유효하지 않은 CVC입니다."),
    ).toBeInTheDocument();
  });
});
