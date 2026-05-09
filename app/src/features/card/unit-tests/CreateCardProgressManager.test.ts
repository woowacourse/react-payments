import { CreateCardProgressManager } from "../ProgressManager";

describe("CreateCardProgressManager 테스트", () => {
  describe("isCardNumberComplete", () => {
    test.each([
      [{ first: "4111", second: "1111", third: "1111", fourth: "1111" }, true],
      [{ first: "5123", second: "4567", third: "8901", fourth: "2345" }, true],
      [{ first: "3412", second: "3412", third: "3412", fourth: "341" }, true],
      [{ first: "3612", second: "3612", third: "3612", fourth: "36" }, true],
      [{ first: "4111", second: "1111", third: "1111", fourth: "" }, false],
      [{ first: "", second: "", third: "", fourth: "" }, false],
    ])(
      "카드번호가 네트워크 브랜드의 자릿수와 일치해야 완료 상태다.",
      (cardNumber, expected) => {
        expect(CreateCardProgressManager.isCardNumberComplete(cardNumber)).toBe(
          expected,
        );
      },
    );
  });

  describe("isCardBrandComplete", () => {
    test("카드 브랜드가 선택된 경우 완료 상태다.", () => {
      expect(CreateCardProgressManager.isCardBrandComplete("visa")).toBe(true);
      expect(CreateCardProgressManager.isCardBrandComplete("master")).toBe(
        true,
      );
    });

    test("카드 브랜드가 선택되지 않은 경우 완료 상태가 아니다.", () => {
      expect(CreateCardProgressManager.isCardBrandComplete("")).toBe(false);
    });
  });

  describe("isCardExpiryDateComplete", () => {
    test("만료 연도와 월이 모두 2자리인 경우 완료 상태다.", () => {
      expect(
        CreateCardProgressManager.isCardExpiryDateComplete({
          "expiry-year": "26",
          "expiry-month": "05",
        }),
      ).toBe(true);
    });

    test("만료 연도 또는 월이 2자리 미만이면 완료 상태가 아니다.", () => {
      expect(
        CreateCardProgressManager.isCardExpiryDateComplete({
          "expiry-year": "26",
          "expiry-month": "5",
        }),
      ).toBeFalsy();
    });
  });

  describe("isCardCVCComplete", () => {
    test("CVC가 3자리인 경우 완료 상태다.", () => {
      expect(CreateCardProgressManager.isCardCVCComplete("123")).toBe(true);
    });

    test.each([["12"], ["1"], [""]])(
      "CVC가 3자리 미만이면 완료 상태가 아니다.",
      (cvc) => {
        expect(CreateCardProgressManager.isCardCVCComplete(cvc)).toBeFalsy();
      },
    );
  });

  describe("isCardPasswordComplete", () => {
    test("비밀번호가 2자리인 경우 완료 상태다.", () => {
      expect(CreateCardProgressManager.isCardPasswordComplete("12")).toBe(true);
    });

    test("비밀번호가 2자리 미만이면 완료 상태가 아니다.", () => {
      expect(CreateCardProgressManager.isCardPasswordComplete("1")).toBeFalsy();
    });
  });

  describe("calculateCurrentProgress", () => {
    const VISA_CARD_NUMBER = {
      first: "4111",
      second: "1111",
      third: "1111",
      fourth: "1111",
    };
    const INCOMPLETE_CARD_NUMBER = {
      first: "4111",
      second: "",
      third: "",
      fourth: "",
    };
    const COMPLETE_EXPIRY_DATE = { "expiry-year": "26", "expiry-month": "05" };
    const INCOMPLETE_EXPIRY_DATE = { "expiry-year": "2", "expiry-month": "05" };

    test("카드번호가 완료되지 않으면 카드번호 단계까지만 활성화된다.", () => {
      const progress = CreateCardProgressManager.calculateCurrentProgress(
        INCOMPLETE_CARD_NUMBER,
        "",
        INCOMPLETE_EXPIRY_DATE,
        "",
        "",
      );
      expect(progress).toEqual({
        cardNumber: true,
        cardBrand: false,
        cardExpiryDate: false,
        cardCVC: false,
        cardPassword: false,
        complete: false,
      });
    });

    test("카드번호가 완료되면 카드 브랜드 단계가 활성화된다.", () => {
      const progress = CreateCardProgressManager.calculateCurrentProgress(
        VISA_CARD_NUMBER,
        "",
        INCOMPLETE_EXPIRY_DATE,
        "",
        "",
      );
      expect(progress).toEqual({
        cardNumber: true,
        cardBrand: true,
        cardExpiryDate: false,
        cardCVC: false,
        cardPassword: false,
        complete: false,
      });
    });

    test("카드 브랜드 선택이 완료되면 만료일 단계가 활성화된다.", () => {
      const progress = CreateCardProgressManager.calculateCurrentProgress(
        VISA_CARD_NUMBER,
        "visa",
        INCOMPLETE_EXPIRY_DATE,
        "",
        "",
      );
      expect(progress).toEqual({
        cardNumber: true,
        cardBrand: true,
        cardExpiryDate: true,
        cardCVC: false,
        cardPassword: false,
        complete: false,
      });
    });

    test("만료일 입력이 완료되면 CVC 단계가 활성화된다.", () => {
      const progress = CreateCardProgressManager.calculateCurrentProgress(
        VISA_CARD_NUMBER,
        "visa",
        COMPLETE_EXPIRY_DATE,
        "",
        "",
      );
      expect(progress).toEqual({
        cardNumber: true,
        cardBrand: true,
        cardExpiryDate: true,
        cardCVC: true,
        cardPassword: false,
        complete: false,
      });
    });

    test("CVC 입력이 완료되면 비밀번호 단계가 활성화된다.", () => {
      const progress = CreateCardProgressManager.calculateCurrentProgress(
        VISA_CARD_NUMBER,
        "visa",
        COMPLETE_EXPIRY_DATE,
        "123",
        "",
      );
      expect(progress).toEqual({
        cardNumber: true,
        cardBrand: true,
        cardExpiryDate: true,
        cardCVC: true,
        cardPassword: true,
        complete: false,
      });
    });

    test("모든 카드 정보가 입력 완료되면 Complete가 활성화된다.", () => {
      const progress = CreateCardProgressManager.calculateCurrentProgress(
        VISA_CARD_NUMBER,
        "visa",
        COMPLETE_EXPIRY_DATE,
        "123",
        "12",
      );
      expect(progress).toEqual({
        cardNumber: true,
        cardBrand: true,
        cardExpiryDate: true,
        cardCVC: true,
        cardPassword: true,
        complete: true,
      });
    });
  });
});
