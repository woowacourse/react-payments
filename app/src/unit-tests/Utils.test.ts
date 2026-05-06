import { sanitizeErrors } from "../Utils";

describe("sanitizeErrors", () => {
  test("빈 문자열 메시지를 제거한다", () => {
    expect(sanitizeErrors(["", "숫자만 사용되어야 합니다."])).toEqual([
      "숫자만 사용되어야 합니다.",
    ]);
  });

  test("중복되는 메시지를 제거한다", () => {
    expect(
      sanitizeErrors([
        "",
        "숫자만 사용되어야 합니다.",
        "1부터 4만 입력해 주세요.",
        "숫자만 사용되어야 합니다.",
        "",
        "",
      ]),
    ).toEqual(["숫자만 사용되어야 합니다.", "1부터 4만 입력해 주세요."]);
  });
});
