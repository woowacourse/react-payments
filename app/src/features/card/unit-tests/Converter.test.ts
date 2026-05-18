import {
  convertCardBrandToIssuerCode,
  errorCodeToErrorMessage,
} from "../Converter";

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

describe("errorCodeToErrorMessage", () => {
  test("fieldCodes에 포함된 에러 코드만 필터링해 메시지 배열로 반환한다.", () => {
    expect(
      errorCodeToErrorMessage(["INVALID_CARD_NUMBER"], ["INVALID_CARD_NUMBER"]),
    ).toEqual(["유효하지 않은 카드 번호입니다."]);

    expect(errorCodeToErrorMessage(["INVALID_CVC"], ["INVALID_CVC"])).toEqual([
      "유효하지 않은 CVC입니다.",
    ]);

    expect(
      errorCodeToErrorMessage(
        ["INVALID_EXPIRATION_DATE"],
        ["INVALID_EXPIRATION_DATE"],
      ),
    ).toEqual(["유효하지 않은 만료일입니다."]);
  });

  test("fieldCodes에 포함되지 않은 에러 코드는 결과에서 제외된다.", () => {
    expect(
      errorCodeToErrorMessage(
        ["INVALID_CVC", "INVALID_EXPIRATION_DATE"],
        ["INVALID_CARD_NUMBER"],
      ),
    ).toEqual([]);

    expect(
      errorCodeToErrorMessage(
        ["INVALID_CARD_NUMBER", "INVALID_CVC"],
        ["INVALID_CVC"],
      ),
    ).toEqual(["유효하지 않은 CVC입니다."]);
  });

  test("codes가 빈 배열이면 빈 배열을 반환한다.", () => {
    expect(errorCodeToErrorMessage([], ["INVALID_CARD_NUMBER"])).toEqual([]);
  });

  test("fieldCodes가 빈 배열이면 빈 배열을 반환한다.", () => {
    expect(errorCodeToErrorMessage(["INVALID_CARD_NUMBER"], [])).toEqual([]);
  });
});
