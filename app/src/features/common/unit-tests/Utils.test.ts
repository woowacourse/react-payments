import { extractErrorCodes } from "../Utils";

describe("extractErrorCodes", () => {
  test("에러 객체에서 code 값만 추출한다", () => {
    expect(
      extractErrorCodes({
        number: { code: "INVALID_CARD_NUMBER" },
        cvc: { code: "INVALID_CVC" },
      }),
    ).toEqual(["INVALID_CARD_NUMBER", "INVALID_CVC"]);
  });

  test("null인 필드는 제외한다", () => {
    expect(
      extractErrorCodes({
        number: { code: "INVALID_CARD_NUMBER" },
        cvc: null,
      }),
    ).toEqual(["INVALID_CARD_NUMBER"]);
  });

  test("undefined인 필드는 제외한다", () => {
    expect(
      extractErrorCodes({
        number: undefined,
        cvc: { code: "INVALID_CVC" },
      }),
    ).toEqual(["INVALID_CVC"]);
  });

  test("모든 필드가 null이면 빈 배열을 반환한다", () => {
    expect(extractErrorCodes({ number: null, cvc: null })).toEqual([]);
  });
});
