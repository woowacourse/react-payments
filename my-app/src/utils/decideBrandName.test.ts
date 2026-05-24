import { describe, it, expect } from "vitest";
import { decideBrandName } from "./decideBrandName";

describe("decideBrandName", () => {
  it("4로 시작하는 번호는 visa를 반환한다", () => {
    expect(decideBrandName("4111111111111111")).toBe("visa");
    expect(decideBrandName("4000000000000000")).toBe("visa");
  });

  it("51~55로 시작하는 번호는 master를 반환한다", () => {
    expect(decideBrandName("5100000000000000")).toBe("master");
    expect(decideBrandName("5300000000000000")).toBe("master");
    expect(decideBrandName("5500000000000000")).toBe("master");
  });

  it("56으로 시작하는 번호는 master가 아니다", () => {
    expect(decideBrandName("5600000000000000")).toBe("");
  });

  it("50으로 시작하는 번호는 master가 아니다", () => {
    expect(decideBrandName("5000000000000000")).toBe("");
  });

  it("3으로 시작하더라도 amex 패턴이 아니면 빈 문자열을 반환한다", () => {
    // decideBrandName은 amex를 인식하지 않음 (3[47] 미처리)
    expect(decideBrandName("3412345678901234")).toBe("");
  });

  it("빈 문자열은 빈 문자열을 반환한다", () => {
    expect(decideBrandName("")).toBe("");
  });

  it("알 수 없는 번호는 빈 문자열을 반환한다", () => {
    expect(decideBrandName("9999999999999999")).toBe("");
    expect(decideBrandName("6011111111111117")).toBe("");
  });
});
