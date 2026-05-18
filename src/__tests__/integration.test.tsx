import { render, screen, waitFor } from "@testing-library/react";
import userEvent, { type UserEvent } from "@testing-library/user-event";
import { describe, it, expect, beforeEach, vi } from "vitest";
import App from "../App";

describe("결제 카드 등록 통합 테스트", () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/react-payments/add");
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  const typeCardNumber = async (user: UserEvent, numberString: string) => {
    const textboxes = screen.getAllByRole("textbox");
    const parts = numberString.match(/.{1,4}/g) || [];

    for (let i = 0; i < 4; i++) {
      if (parts[i]) {
        await user.type(textboxes[i], parts[i]);
      }
    }
  };

  it("1. 유효하지 않은 카드 번호(9999 시작) 입력 시 에러를 반환한다 (롯데카드 실패)", async () => {
    const user = userEvent.setup();
    render(<App />);

    await typeCardNumber(user, "9999123456789012");

    const submitButton = screen.getByRole("button", { name: /다음|등록/i }); // 실제 버튼 이름으로 수정 필요
    await user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/유효하지 않은 카드 번호입니다/i),
      ).toBeInTheDocument();
    });
  });

  it("2. 유효하지 않은 CVC(000) 입력 시 에러를 반환한다", async () => {
    const user = userEvent.setup();
    render(<App />);

    await typeCardNumber(user, "4111111111111111"); // 정상 BC카드 번호

    const cvcInput = screen.getByPlaceholderText("123");
    await user.type(cvcInput, "000"); // 실패 조건 CVC 입력

    const submitButton = screen.getByRole("button", { name: /다음|등록/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/유효하지 않은 CVC입니다/i)).toBeInTheDocument();
    });
  });

  it("3. 유효하지 않은 만료일(13월) 입력 시 에러를 반환한다", async () => {
    const user = userEvent.setup();
    render(<App />);

    await typeCardNumber(user, "5511123456789012"); // 정상 BC카드 번호

    const monthInput = screen.getByPlaceholderText("MM");
    const yearInput = screen.getByPlaceholderText("YY");

    await user.type(monthInput, "13"); // 실패 조건 (1~12월을 벗어남)
    await user.type(yearInput, "28");

    const submitButton = screen.getByRole("button", { name: /다음|등록/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/유효하지 않은 만료일입니다/i),
      ).toBeInTheDocument();
    });
  });

  it("4. BC카드 정상 등록 테스트 (5511 1234 5678 9012)", async () => {
    const user = userEvent.setup();
    render(<App />);

    await typeCardNumber(user, "5511123456789012");

    await user.type(screen.getByPlaceholderText("MM"), "12");
    await user.type(screen.getByPlaceholderText("YY"), "28");
    await user.type(screen.getByPlaceholderText("123"), "123");
    await user.type(screen.getByPlaceholderText("**"), "12"); // 비밀번호 앞 2자리

    const submitButton = screen.getByRole("button", { name: /다음|등록/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(window.location.pathname).toBe("/react-payments/enrollment"); // 또는 예상되는 다음 라우트
    });
  });

  it("5. 신한카드 정상 등록 테스트 (4111 1111 1111 1111)", async () => {
    const user = userEvent.setup();
    render(<App />);

    await typeCardNumber(user, "4111111111111111");

    await user.type(screen.getByPlaceholderText("MM"), "11");
    await user.type(screen.getByPlaceholderText("YY"), "25");
    await user.type(screen.getByPlaceholderText("123"), "456");
    await user.type(screen.getByPlaceholderText("**"), "00");

    const submitButton = screen.getByRole("button", { name: /다음|등록/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(window.location.pathname).toBe("/react-payments/enrollment");
    });
  });
});
