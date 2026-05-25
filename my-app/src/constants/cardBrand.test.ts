import { describe, it, expect } from "vitest";
import { detectBrand, getFieldConfig, DEFAULT_FIELD_CONFIG } from "./cardBrand";

describe("detectBrand", () => {
  it("4로 시작하면 visa를 반환한다", () => {
    expect(detectBrand("4111111111111111")).toBe("visa");
    expect(detectBrand("4000123456789012")).toBe("visa");
  });

  it("51~55로 시작하면 master를 반환한다", () => {
    expect(detectBrand("5100000000000000")).toBe("master");
    expect(detectBrand("5300000000000000")).toBe("master");
    expect(detectBrand("5500000000000000")).toBe("master");
  });

  it("56으로 시작하면 master가 아닌 빈 문자열을 반환한다", () => {
    expect(detectBrand("5600000000000000")).toBe("");
  });

  it("34, 37로 시작하면 amex를 반환한다", () => {
    expect(detectBrand("341111111111111")).toBe("amex");
    expect(detectBrand("371111111111111")).toBe("amex");
  });

  it("30, 33, 38로 시작하면 amex가 아니다", () => {
    expect(detectBrand("300000000000000")).not.toBe("amex");
    expect(detectBrand("380000000000000")).not.toBe("amex");
  });

  it("36으로 시작하면 diners를 반환한다", () => {
    expect(detectBrand("36111111111111")).toBe("diners");
  });

  it("유니온페이 번호를 인식한다", () => {
    expect(detectBrand("6221260000000000")).toBe("unionpay");
    expect(detectBrand("6240000000000000")).toBe("unionpay");
    expect(detectBrand("6282000000000000")).toBe("unionpay");
  });

  it("알 수 없는 번호는 빈 문자열을 반환한다", () => {
    expect(detectBrand("9999999999999999")).toBe("");
    expect(detectBrand("")).toBe("");
  });
});

describe("getFieldConfig", () => {
  it("visa는 [4, 4, 4, 4]를 반환한다", () => {
    expect(getFieldConfig("visa")).toEqual([4, 4, 4, 4]);
  });

  it("master는 [4, 4, 4, 4]를 반환한다", () => {
    expect(getFieldConfig("master")).toEqual([4, 4, 4, 4]);
  });

  it("amex는 [4, 6, 5]를 반환한다", () => {
    expect(getFieldConfig("amex")).toEqual([4, 6, 5]);
  });

  it("diners는 [4, 6, 4]를 반환한다", () => {
    expect(getFieldConfig("diners")).toEqual([4, 6, 4]);
  });

  it("unionpay는 [4, 4, 4, 4]를 반환한다", () => {
    expect(getFieldConfig("unionpay")).toEqual([4, 4, 4, 4]);
  });

  it("알 수 없는 브랜드는 DEFAULT_FIELD_CONFIG를 반환한다", () => {
    expect(getFieldConfig("unknown")).toEqual(DEFAULT_FIELD_CONFIG);
    expect(getFieldConfig("")).toEqual(DEFAULT_FIELD_CONFIG);
  });
});
