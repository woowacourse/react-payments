import { convertCardBrandToIssuerCode } from "../Converter";

describe("convertCardBrandToIssuerCode", () => {
  test("유효한 카드 브랜드를 전달하면 해당 issuer code를 반환한다.", () => {
    expect(convertCardBrandToIssuerCode("bc")).toBe("31");
    expect(convertCardBrandToIssuerCode("sinhan")).toBe("41");
    expect(convertCardBrandToIssuerCode("kakao")).toBe("15");
    expect(convertCardBrandToIssuerCode("hyundai")).toBe("61");
    expect(convertCardBrandToIssuerCode("woori")).toBe("W1");
    expect(convertCardBrandToIssuerCode("lotte")).toBe("71");
    expect(convertCardBrandToIssuerCode("hana")).toBe("21");
    expect(convertCardBrandToIssuerCode("kookmin")).toBe("11");
  });

  test("존재하지 않는 카드 브랜드를 전달하면 undefined를 반환한다.", () => {
    expect(convertCardBrandToIssuerCode("unknown")).toBeUndefined();
    expect(convertCardBrandToIssuerCode("")).toBeUndefined();
  });
});
