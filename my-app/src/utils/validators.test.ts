import { describe, it, expect } from "vitest";
import { validateCardNumber, validateExpiryDate, validateCvc, validatePassword } from "./validators";

describe("validateCardNumber", () => {
  const defaultConfig = [4, 4, 4, 4];

  it("첫 번째 필드가 비어 있으면 errorIndex 0을 반환한다", () => {
    expect(validateCardNumber(["", "", "", ""], defaultConfig)).toEqual({
      errorIndex: 0,
      message: "카드 번호를 입력해주세요",
    });
  });

  it("중간 필드가 비어 있으면 해당 index를 반환한다", () => {
    expect(validateCardNumber(["1234", "", "", ""], defaultConfig)).toEqual({
      errorIndex: 1,
      message: "카드 번호를 입력해주세요",
    });
  });

  it("마지막 필드가 비어 있으면 해당 index를 반환한다", () => {
    expect(validateCardNumber(["1234", "5678", "9012", ""], defaultConfig)).toEqual({
      errorIndex: 3,
      message: "카드 번호를 입력해주세요",
    });
  });

  it("모든 필드가 채워지면 유효 결과를 반환한다", () => {
    expect(validateCardNumber(["1234", "5678", "9012", "3456"], defaultConfig)).toEqual({
      errorIndex: -1,
      message: "",
    });
  });

  it("필드 자릿수가 부족하면 해당 index를 반환한다", () => {
    expect(validateCardNumber(["12", "5678", "9012", "3456"], defaultConfig)).toEqual({
      errorIndex: 0,
      message: "카드 번호를 입력해주세요",
    });
  });

  it("amex fieldConfig에서 두 번째 필드가 6자리 미만이면 errorIndex 1을 반환한다", () => {
    expect(validateCardNumber(["3456", "1234", "56789"], [4, 6, 5])).toEqual({
      errorIndex: 1,
      message: "카드 번호를 입력해주세요",
    });
  });
});

describe("validateExpiryDate", () => {
  it("MM이 비어 있으면 errorIndex 0을 반환한다", () => {
    expect(validateExpiryDate(["", ""])).toEqual({
      errorIndex: 0,
      message: "유효기간을 입력해주세요",
    });
  });

  it("MM이 1자리이면 errorIndex 0을 반환한다", () => {
    expect(validateExpiryDate(["0", "25"])).toEqual({
      errorIndex: 0,
      message: "유효기간을 입력해주세요",
    });
  });

  it("YY가 비어 있으면 errorIndex 1을 반환한다", () => {
    expect(validateExpiryDate(["01", ""])).toEqual({
      errorIndex: 1,
      message: "유효기간을 입력해주세요",
    });
  });

  it("YY가 1자리이면 errorIndex 1을 반환한다", () => {
    expect(validateExpiryDate(["01", "2"])).toEqual({
      errorIndex: 1,
      message: "유효기간을 입력해주세요",
    });
  });

  it("MM, YY 모두 2자리이면 유효 결과를 반환한다", () => {
    expect(validateExpiryDate(["01", "25"])).toEqual({
      errorIndex: -1,
      message: "",
    });
  });

  it("MM이 13이면 errorIndex 0을 반환한다", () => {
    expect(validateExpiryDate(["13", "25"])).toEqual({
      errorIndex: 0,
      message: "유효하지 않은 월입니다",
    });
  });

  it("MM이 00이면 errorIndex 0을 반환한다", () => {
    expect(validateExpiryDate(["00", "25"])).toEqual({
      errorIndex: 0,
      message: "유효하지 않은 월입니다",
    });
  });

  it("MM이 경계값 01이면 유효 결과를 반환한다", () => {
    expect(validateExpiryDate(["01", "25"])).toEqual({
      errorIndex: -1,
      message: "",
    });
  });

  it("MM이 경계값 12이면 유효 결과를 반환한다", () => {
    expect(validateExpiryDate(["12", "25"])).toEqual({
      errorIndex: -1,
      message: "",
    });
  });
});

describe("validateCvc", () => {
  it("빈 문자열이면 에러를 반환한다", () => {
    expect(validateCvc("")).toEqual({ errorIndex: 0, message: "CVC를 입력해주세요" });
  });

  it("2자리이면 에러를 반환한다", () => {
    expect(validateCvc("12")).toEqual({ errorIndex: 0, message: "CVC를 입력해주세요" });
  });

  it("3자리이면 유효 결과를 반환한다", () => {
    expect(validateCvc("123")).toEqual({ errorIndex: -1, message: "" });
  });
});

describe("validatePassword", () => {
  it("빈 문자열이면 에러를 반환한다", () => {
    expect(validatePassword("")).toEqual({ errorIndex: 0, message: "비밀번호를 입력해주세요" });
  });

  it("1자리이면 에러를 반환한다", () => {
    expect(validatePassword("1")).toEqual({ errorIndex: 0, message: "비밀번호를 입력해주세요" });
  });

  it("2자리이면 유효 결과를 반환한다", () => {
    expect(validatePassword("12")).toEqual({ errorIndex: -1, message: "" });
  });
});
