export const validateNumber = (newValue: string) => {
  const errorValue = { state: true, message: "" };
  if (!/^\d+$/.test(newValue) && newValue) {
    errorValue.state = false;
    errorValue.message = "숫자만 입력 가능합니다";
  }
  return errorValue;
}

export const validateMonth = (index: number, newValue: string) => {
  const errorValue = { state: true, message: "" };
  if (index === 0 && newValue) {
    const month = Number(newValue);

    if (month > 12) {
      errorValue.state = false;
      errorValue.message = "1월~12월 사이를 입력해 주세요.";
    } else if (newValue.length === 1) {
      errorValue.state = false;
      errorValue.message = "월을 01 ~ 12 형식으로 작성해주세요.";
    } else if (newValue.length === 2 && month === 0) {
      errorValue.state = false;
      errorValue.message = "1월~12월 사이를 입력해 주세요.";
    } else {
      errorValue.state = true;
      errorValue.message = "";
    }
  }

  return errorValue;
}
