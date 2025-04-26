/**
 * 주어진 값이 숫자 타입이면서 NaN인지 확인합니다.
 * @param value - 확인할 값
 * @returns 값이 숫자 타입이면서 NaN이면 true, 그렇지 않으면 false를 반환합니다.
 */
export const isNumericNaN = (value: unknown): boolean => {
  return typeof value === "number" && Number.isNaN(value);
};
