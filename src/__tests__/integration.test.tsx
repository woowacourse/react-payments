import { render, screen, waitFor } from "@testing-library/react";
import userEvent, { type UserEvent } from "@testing-library/user-event";
import { describe, it, expect, beforeEach, vi } from "vitest";
import App from "../App";

const CARD_SEGMENTS = {
  visa: ["4111", "0000", "0000", "0001"],
  mastercard: ["5511", "0000", "0000", "0001"],
  unknownType: ["9999", "0000", "0000", "0001"],
} as const;

describe("결제 카드 등록 통합 테스트", () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/react-payments/add");
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  const typeCardSegments = async (
    user: UserEvent,
    segments: readonly string[],
  ) => {
    const cardInputs = screen.getAllByRole("textbox");
    for (let i = 0; i < segments.length; i++) {
      await user.type(cardInputs[i], segments[i]);
    }
  };

  const selectBrand = async (user: UserEvent, brand: string) => {
    await user.click(await screen.findByText("카드사를 선택해주세요"));
    await user.click(await screen.findByText(brand));
  };

  const fillFullForm = async (
    user: UserEvent,
    options: {
      segments: readonly string[];
      brand: string;
      month: string;
      year: string;
      cvc: string;
      password: string;
    },
  ) => {
    render(<App />);
    await typeCardSegments(user, options.segments);
    await selectBrand(user, options.brand);
    await user.type(await screen.findByPlaceholderText("MM"), options.month);
    await user.type(await screen.findByPlaceholderText("YY"), options.year);
    await user.type(await screen.findByPlaceholderText("123"), options.cvc);
    await user.type(await screen.findByPlaceholderText("**"), options.password);
    await user.click(screen.getByRole("button", { name: "확인" }));
  };

  it("1. 인식 불가 카드 번호 입력 시 서버 에러를 반환한다", async () => {
    const user = userEvent.setup();

    await fillFullForm(user, {
      segments: CARD_SEGMENTS.unknownType,
      brand: "신한카드",
      month: "12",
      year: "28",
      cvc: "123",
      password: "12",
    });

    await waitFor(() => {
      expect(
        screen.getByText(/유효하지 않은 카드 번호입니다/i),
      ).toBeInTheDocument();
    });
  });

  it("2. 유효하지 않은 CVC(000) 입력 시 서버 에러를 반환한다", async () => {
    const user = userEvent.setup();

    await fillFullForm(user, {
      segments: CARD_SEGMENTS.visa,
      brand: "신한카드",
      month: "12",
      year: "28",
      cvc: "000",
      password: "12",
    });

    await waitFor(() => {
      expect(screen.getByText(/유효하지 않은 CVC입니다/i)).toBeInTheDocument();
    });
  });

  it("3. 13월 입력 시 클라이언트 유효성 에러가 표시된다", async () => {
    const user = userEvent.setup();
    render(<App />);

    await typeCardSegments(user, CARD_SEGMENTS.mastercard);
    await selectBrand(user, "BC카드");
    await user.type(await screen.findByPlaceholderText("MM"), "13");

    await waitFor(() => {
      expect(
        screen.getByText(/1 ~ 12월 사이의 숫자를 입력해주세요/i),
      ).toBeInTheDocument();
    });
  });

  it("4. BC카드 정상 등록 테스트", async () => {
    const user = userEvent.setup();

    await fillFullForm(user, {
      segments: CARD_SEGMENTS.mastercard,
      brand: "BC카드",
      month: "12",
      year: "28",
      cvc: "123",
      password: "12",
    });

    await waitFor(() => {
      expect(window.location.pathname).toBe("/react-payments/enrollment");
    });
  });

  it("5. 신한카드 정상 등록 테스트", async () => {
    const user = userEvent.setup();

    await fillFullForm(user, {
      segments: CARD_SEGMENTS.visa,
      brand: "신한카드",
      month: "11",
      year: "25",
      cvc: "456",
      password: "00",
    });

    await waitFor(() => {
      expect(window.location.pathname).toBe("/react-payments/enrollment");
    });
  });
});
