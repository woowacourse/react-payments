import {
  fillEmptyPlaceToBlank,
  joinCardNumber,
  runValidation,
  sanitizeErrors,
} from "../Utils";

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

describe("fillEmptyPlaceToBlank", () => {
  test("문자열이 지정된 길이보다 짧으면 나머지를 공백으로 채운다.", () => {
    expect(fillEmptyPlaceToBlank("12", 4)).toEqual("12  ");
  });

  test("문자열이 지정된 길이와 같으면 그대로 반환한다.", () => {
    expect(fillEmptyPlaceToBlank("1234", 4)).toEqual("1234");
  });
});

describe("joinCardNumber", () => {
  test("전달되는 문자열 배열을 합친다.", () => {
    expect(joinCardNumber(["123", "456"], 3)).toEqual("123456");
  });

  test("전달된 길이보다 낮은 길이를 가진 문자열일 경우 그 차이만큼 공백을 채운다.", () => {
    expect(joinCardNumber(["123", "4567", "89"], 5)).toEqual(
      "123  4567 89   ",
    );
  });
});

describe("runValidation", () => {
  test("모든 validator가 통과하면 { state: false, message: '' }를 반환한다.", () => {
    const validators = [() => {}, () => {}];
    expect(runValidation(validators)).toEqual({ state: false, message: "" });
  });

  test("validator가 에러를 던지면 { state: true, message: 에러메시지 }를 반환한다.", () => {
    const validators = [
      () => {},
      () => {
        throw new Error("숫자만 사용되어야 합니다.");
      },
    ];
    expect(runValidation(validators)).toEqual({
      state: true,
      message: "숫자만 사용되어야 합니다.",
    });
  });

  test("여러 validator 중 첫 번째로 에러를 던진 validator의 메시지를 반환한다.", () => {
    const validators = [
      () => {
        throw new Error("첫 번째 에러");
      },
      () => {
        throw new Error("두 번째 에러");
      },
    ];
    expect(runValidation(validators)).toEqual({
      state: true,
      message: "첫 번째 에러",
    });
  });
});
