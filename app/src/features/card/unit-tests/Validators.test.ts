import { Validator } from "../validators/CardValidator";

describe("카드 정보 검증기 테스트", () => {
  describe("카드값 타입 테스트", () => {
    test.each([["zz", "hello world", "카드번호", "!@*#@", "/check"]])(
      "카드와 관련된 특정 입력에는 숫자만 입력해야 한다.",
      (value) => {
        expect(() => Validator.isNumber(value)).toThrow(
          "숫자만 입력 가능합니다.",
        );
      },
    );
  });

  describe("카드번호 테스트", () => {
    test("네트워크 브랜드 형식에 해당하지 않는 카드 번호는 에러가 발생한다.", () => {
      expect(() => Validator.isValidNetworkBrand("1")).toThrow(
        "존재하지 않는 네트워크 브랜드 입니다.",
      );
      expect(() => Validator.isValidNetworkBrand("59")).toThrow(
        "존재하지 않는 네트워크 브랜드 입니다.",
      );
    });

    test("카드 번호 각 항목은 4자리여야 한다.", () => {
      expect(() => Validator.isValidCardNumberLength("")).not.toThrow();
      expect(() => Validator.isValidCardNumberLength("1234")).not.toThrow();
      expect(() => Validator.isValidCardNumberLength("123")).toThrow(
        "카드 번호 각 항목은 4자리여야 합니다.",
      );
    });
  });

  describe("카드 유효기간 테스트", () => {
    afterEach(() => {
      jest.useRealTimers();
    });
    test("카드 유효기간중 입력월은 0 이나 1로 시작해야 한다.", () => {
      expect(() => Validator.isValidMonth("0")).not.toThrow();
      expect(() => Validator.isValidMonth("1")).not.toThrow();
      expect(() => Validator.isValidMonth("2")).toThrow(
        "유효하지 않은 날짜 형식입니다. 0 이나 1로 시작해야 합니다.",
      );
    });

    test("카드 유효기간중 입력월은 1 ~ 12 이내 숫자여야 한다.", () => {
      expect(() => Validator.isValidMonth("01")).not.toThrow();
      expect(() => Validator.isValidMonth("02")).not.toThrow();
      expect(() => Validator.isValidMonth("11")).not.toThrow();
      expect(() => Validator.isValidMonth("12")).not.toThrow();
      expect(() => Validator.isValidMonth("13")).toThrow(
        "유효하지 않은 날짜 형식입니다. 1 ~ 12 이내 숫자여야 합니다.",
      );
    });

    test.each([
      {
        mockDate: "2096-01-01",
        invalidYear: ["95", "02"],
        validYear: ["96", "97", "98", "99", "00", "01"],
      },
      {
        mockDate: "2050-01-01",
        invalidYear: ["49", "56"],
        validYear: ["50", "51", "52", "53", "54", "55"],
      },
      {
        mockDate: "2000-01-01",
        invalidYear: ["99", "06"],
        validYear: ["00", "01", "02", "03", "04", "05"],
      },
    ])(
      "카드 유효기간은 현재 연도로부터 5년 이내여야 한다.",
      ({ mockDate, invalidYear, validYear }) => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date(mockDate));
        invalidYear.forEach((year: string) => {
          expect(() => Validator.isValidYear(year)).toThrow(
            "유효하지 않은 연도입니다.",
          );
        });
        validYear.forEach((year: string) => {
          expect(() => Validator.isValidYear(year)).not.toThrow();
        });
      },
    );

    test("카드 유효기간 각 항목은 2자리 여야 한다.", () => {
      expect(() => Validator.isValidCardExpiryDateLength("")).not.toThrow();
      expect(() => Validator.isValidCardExpiryDateLength("12")).not.toThrow();
      expect(() => Validator.isValidCardExpiryDateLength("1")).toThrow(
        "날짜 각 항목은 2자리여야 합니다.",
      );
    });
  });

  describe("카드 CVC 테스트", () => {
    test("카드 CVC번호는 3자리여야 한다.", () => {
      expect(() => Validator.isValidCardCVCLength("")).not.toThrow();
      expect(() => Validator.isValidCardCVCLength("123")).not.toThrow();
      expect(() => Validator.isValidCardCVCLength("1")).toThrow(
        "CVC는 3자리여야 합니다.",
      );
    });
  });
});
