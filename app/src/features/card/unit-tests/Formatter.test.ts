import { maskCardNumber } from "../Formatter";

describe("maskCardNumber", () => {
  test("카드번호의 5 ~ 10번까지 마스킹 처리하여 반환한다.", () => {
    expect(maskCardNumber("1234567890123456")).toBe("123456******3456");
  });
});
