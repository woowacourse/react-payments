import { screen, waitFor } from "@testing-library/react";
import type { UserEvent } from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import { describe, expect, it } from "vitest";

import { server } from "@/mock/server";
import { renderApp } from "@/test/renderApp";

const VALID_CARD_NUMBER_UNITS = ["4111", "1111", "1111", "1111"] as const;
const VALID_CARD_COMPANY_OPTION = "BC카드";
const VALID_MONTH = "12";
const VALID_YEAR = "28";
const VALID_CVC = "123";
const VALID_PASSWORD = "12";

const fillCardNumber = async (user: UserEvent) => {
  const cardNumberInputs = screen.getAllByPlaceholderText("1234");
  for (let i = 0; i < VALID_CARD_NUMBER_UNITS.length; i += 1) {
    await user.type(cardNumberInputs[i], VALID_CARD_NUMBER_UNITS[i]);
  }
};

const selectCardCompany = async (user: UserEvent) => {
  const trigger = await screen.findByRole("button", {
    name: "카드사를 선택해주세요",
  });
  await user.click(trigger);
  await user.click(
    screen.getByRole("option", { name: VALID_CARD_COMPANY_OPTION }),
  );
};

const fillValidityPeriod = async (user: UserEvent) => {
  const monthInput = await screen.findByPlaceholderText("MM");
  const yearInput = screen.getByPlaceholderText("YY");
  await user.type(monthInput, VALID_MONTH);
  await user.type(yearInput, VALID_YEAR);
};

const fillCVC = async (user: UserEvent, cvc: string = VALID_CVC) => {
  const cvcInput = await screen.findByPlaceholderText("123");
  await user.type(cvcInput, cvc);
};

const fillPassword = async (user: UserEvent) => {
  const passwordInput = await screen.findByPlaceholderText("**");
  await user.type(passwordInput, VALID_PASSWORD);
};

const fillAllSteps = async (user: UserEvent) => {
  await fillCardNumber(user);
  await selectCardCompany(user);
  await fillValidityPeriod(user);
  await fillCVC(user);
  await fillPassword(user);
};

describe("AddNewCardPage", () => {
  it("카드 번호 → 회사 → 유효기간 → CVC → 비밀번호 순차 입력 시 단계별 필드가 노출되고 마지막에 활성화된 제출 버튼이 보인다", async () => {
    const { user } = renderApp(["/"]);

    // 처음에는 카드 번호 입력 필드만 보인다
    expect(screen.getByText("결제할 카드 번호를 입력해 주세요")).toBeVisible();
    expect(
      screen.queryByText("카드사를 선택해 주세요"),
    ).not.toBeInTheDocument();

    // 카드 번호를 입력하면 카드사 선택 필드가 보인다
    await fillCardNumber(user);
    expect(await screen.findByText("카드사를 선택해 주세요")).toBeVisible();

    // 카드사를 선택하면 유효기간 입력 필드가 보인다
    await selectCardCompany(user);
    expect(
      await screen.findByText("카드 유효기간을 입력해 주세요"),
    ).toBeVisible();

    // 유효기간을 입력하면 CVC 입력 필드가 보인다
    await fillValidityPeriod(user);
    expect(await screen.findByText("CVC 번호를 입력해 주세요")).toBeVisible();

    // CVC를 입력하면 비밀번호 입력 필드가 보인다
    await fillCVC(user);
    expect(await screen.findByText("비밀번호를 입력해 주세요")).toBeVisible();

    // 비밀번호를 입력하면 제출 버튼이 활성화된다
    await fillPassword(user);

    // 제출 버튼이 보이고 활성화되어 있다
    const submitButton = await screen.findByRole("button", { name: "완료" });
    expect(submitButton).toBeEnabled();
  });

  it("폼 제출이 성공하면 카드 등록 완료 페이지로 이동한다", async () => {
    const { user } = renderApp(["/"]);

    // 모든 단계를 입력하고 제출 버튼을 클릭한다
    await fillAllSteps(user);
    const submitButton = await screen.findByRole("button", { name: "완료" });

    // 제출 버튼 클릭
    await user.click(submitButton);

    // 카드 등록 완료 페이지로 이동했는지 확인한다
    await waitFor(() => {
      expect(screen.getByText("4111로 시작하는")).toBeInTheDocument();
    });
    expect(screen.getByText("BC카드가 등록되었어요.")).toBeInTheDocument();
  });

  it("서버가 INVALID_CARD_NUMBER로 응답하면 카드 번호 필드에 에러 메시지가 표시된다", async () => {
    server.use(
      http.post("/api/cards", () =>
        HttpResponse.json(
          {
            code: "INVALID_CARD_NUMBER",
            message: "유효하지 않은 카드 번호입니다.",
          },
          { status: 400 },
        ),
      ),
    );

    const { user } = renderApp(["/"]);

    // 모든 단계를 입력하고 제출 버튼을 클릭한다
    await fillAllSteps(user);
    const submitButton = await screen.findByRole("button", { name: "완료" });
    await user.click(submitButton);

    // 카드 번호 필드에 에러 메시지가 표시된다
    expect(
      await screen.findByText(
        "지원되지 않는 카드입니다. 다른 카드를 이용해주세요.",
      ),
    ).toBeInTheDocument();
  });

  it("서버가 INVALID_CVC로 응답하면 CVC 필드에 에러 메시지가 표시된다", async () => {
    server.use(
      http.post("/api/cards", () =>
        HttpResponse.json(
          { code: "INVALID_CVC", message: "유효하지 않은 CVC입니다." },
          { status: 400 },
        ),
      ),
    );

    const { user } = renderApp(["/"]);
    await fillAllSteps(user);
    const submitButton = await screen.findByRole("button", { name: "완료" });
    await user.click(submitButton);

    expect(
      await screen.findByText("숫자만 입력 가능합니다."),
    ).toBeInTheDocument();
  });

  it("서버가 INVALID_EXPIRATION_DATE로 응답하면 유효기간 필드에 에러 메시지가 표시된다", async () => {
    server.use(
      http.post("/api/cards", () =>
        HttpResponse.json(
          {
            code: "INVALID_EXPIRATION_DATE",
            message: "유효하지 않은 만료일입니다.",
          },
          { status: 400 },
        ),
      ),
    );

    const { user } = renderApp(["/"]);
    await fillAllSteps(user);
    const submitButton = await screen.findByRole("button", { name: "완료" });
    await user.click(submitButton);

    expect(
      await screen.findByText(
        "올바른 입력범위가 아닙니다. 1월부터 12월 사이여야 합니다.",
      ),
    ).toBeInTheDocument();
  });
});
