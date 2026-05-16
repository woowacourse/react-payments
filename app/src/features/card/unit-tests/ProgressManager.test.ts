import { calculateCreateCardCurrentProgress } from "../ProgressManager";

describe("calculateCreateCardCurrentProgress 테스트", () => {
  const VISA_CARD_NUMBER = "4111111111111111";
  const defaultCardFormData = {
    cardNumber: "",
    cardBrand: "",
    cardExpiryDate: "",
    cardCVC: "",
    cardPassword: "",
  };

  test("카드번호가 완료되지 않으면 카드번호 단계까지만 활성화된다.", () => {
    const cardFormData = { ...defaultCardFormData, cardNumber: "4111" };
    const progress = calculateCreateCardCurrentProgress(cardFormData);
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
    const cardFormData = {
      ...defaultCardFormData,
      cardNumber: VISA_CARD_NUMBER,
    };
    const progress = calculateCreateCardCurrentProgress(cardFormData);
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
    const cardFormData = {
      cardNumber: VISA_CARD_NUMBER,
      cardBrand: "",
      cardExpiryDate: "1234",
      cardCVC: "333",
      cardPassword: "12",
    };
    const progress = calculateCreateCardCurrentProgress(cardFormData);
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
    const cardFormData = {
      cardNumber: VISA_CARD_NUMBER,
      cardBrand: "visa",
      cardExpiryDate: "1234",
      cardCVC: "123",
      cardPassword: "12",
    };
    const progress = calculateCreateCardCurrentProgress(cardFormData);
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
