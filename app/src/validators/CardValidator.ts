export const Validator = {
  isNumber(value: string) {
    if (Number.isNaN(Number(value))) {
      throw new Error("숫자만 입력 가능합니다.");
    }
  },

  isValidNetworkBrand(value: string) {
    if (value !== "" && !["4", "5"].includes(value[0])) {
      throw new Error(
        "유효한 카드 번호가 아닙니다. 카드 번호는 4 또는 5로 시작해야합니다.",
      );
    }
    if (
      value.length === 2 &&
      value[0] === "5" &&
      !["1", "2", "3", "4", "5"].includes(value[1])
    ) {
      throw new Error("마스터카드 번호는 51 ~ 55 사이 숫자로 시작해야 합니다.");
    }
  },

  isValidCardNumberLength(value: string, limit: number) {
    if (![0, limit].includes(value.length)) {
      throw new Error("카드 번호 각 항목은 4자리여야 합니다.");
    }
  },
};
