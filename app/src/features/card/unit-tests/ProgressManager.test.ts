import { calculateCreateCardCurrentProgress } from "../ProgressManager";

describe("calculateCreateCardCurrentProgress 테스트", () => {
  const VISA_CARD_NUMBER = "4111111111111111";

  test("카드번호가 완료되지 않으면 카드번호 단계까지만 활성화된다.", () => {
    const progress = calculateCreateCardCurrentProgress("4111", "", "", "", "");
    expect(progress).toEqual({
      cardNumberIsComplete: true,
      cardBrandIsComplete: false,
      cardExpiryDateIsComplete: false,
      cardCVCIsComplete: false,
      cardPasswordIsComplete: false,
      allComplete: false,
    });
  });

  test("카드번호가 완료되면 카드 브랜드 단계가 활성화된다.", () => {
    const progress = calculateCreateCardCurrentProgress(
      VISA_CARD_NUMBER,
      "",
      "",
      "",
      "",
    );
    expect(progress).toEqual({
      cardNumberIsComplete: true,
      cardBrandIsComplete: true,
      cardExpiryDateIsComplete: false,
      cardCVCIsComplete: false,
      cardPasswordIsComplete: false,
      allComplete: false,
    });
  });

  test("이후 단계가 유효하더라도 이전 단계값이 유효하지 않으면 비활성화 된다.", () => {
    const progress = calculateCreateCardCurrentProgress(
      VISA_CARD_NUMBER,
      "",
      "1234",
      "333",
      "12",
    );
    expect(progress).toEqual({
      cardNumberIsComplete: true,
      cardBrandIsComplete: true,
      cardExpiryDateIsComplete: false,
      cardCVCIsComplete: false,
      cardPasswordIsComplete: false,
      allComplete: false,
    });
  });

  test("모든 카드 정보가 입력 완료되면 allComplete가 활성화된다.", () => {
    const progress = calculateCreateCardCurrentProgress(
      VISA_CARD_NUMBER,
      "visa",
      "1234",
      "123",
      "12",
    );
    expect(progress).toEqual({
      cardNumberIsComplete: true,
      cardBrandIsComplete: true,
      cardExpiryDateIsComplete: true,
      cardCVCIsComplete: true,
      cardPasswordIsComplete: true,
      allComplete: true,
    });
  });
});
