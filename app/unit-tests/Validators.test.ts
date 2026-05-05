import { Validator } from "../src/validators/CardValidator";

describe("카드 정보 검증기 테스트", () => {
  describe("카드 유효기간 테스트", () => {
    afterEach(() => {
      jest.useRealTimers();
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
  });
});
