import { CardInputChecker } from "../Checker";

describe("CardInputChecker 테스트", () => {
  describe("isCardNumberComplete", () => {
    test.each([
      ["4111111111111111", true],
      ["5123456789012345", true],
      ["341234123412341", true],
      ["36123612361236", true],
      ["411111111111", false],
      ["", false],
    ])(
      "카드번호가 네트워크 브랜드의 자릿수와 일치해야 완료 상태다.",
      (cardNumber, expected) => {
        expect(CardInputChecker.isCardNumberComplete(cardNumber)).toBe(
          expected,
        );
      },
    );
  });

  describe("isCardBrandComplete", () => {
    test("카드 브랜드가 선택된 경우 완료 상태다.", () => {
      expect(CardInputChecker.isCardBrandComplete("visa")).toBe(true);
      expect(CardInputChecker.isCardBrandComplete("master")).toBe(true);
    });

    test("카드 브랜드가 선택되지 않은 경우 완료 상태가 아니다.", () => {
      expect(CardInputChecker.isCardBrandComplete("")).toBe(false);
    });
  });

  describe("isCardExpiryDateComplete", () => {
    test("만료 연도와 월이 모두 2자리인 경우 완료 상태다.", () => {
      expect(CardInputChecker.isCardExpiryDateComplete("2605")).toBe(true);
    });

    test("만료 연도 또는 월이 2자리 미만이면 완료 상태가 아니다.", () => {
      expect(CardInputChecker.isCardExpiryDateComplete("265")).toBeFalsy();
    });
  });

  describe("isCardCVCComplete", () => {
    test("CVC가 3자리인 경우 완료 상태다.", () => {
      expect(CardInputChecker.isCardCVCComplete("123")).toBe(true);
    });

    test.each([["12"], ["1"], [""]])(
      "CVC가 3자리 미만이면 완료 상태가 아니다.",
      (cvc) => {
        expect(CardInputChecker.isCardCVCComplete(cvc)).toBeFalsy();
      },
    );
  });

  describe("isCardPasswordComplete", () => {
    test("비밀번호가 2자리인 경우 완료 상태다.", () => {
      expect(CardInputChecker.isCardPasswordComplete("12")).toBe(true);
    });

    test("비밀번호가 2자리 미만이면 완료 상태가 아니다.", () => {
      expect(CardInputChecker.isCardPasswordComplete("1")).toBeFalsy();
    });
  });
});
