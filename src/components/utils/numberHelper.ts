interface LimitNumberProps {
  value: string;
  maxLength: number;
}
export const limitNumberLength = (value: string, maxLength: number) => {
  return value.slice(0, maxLength);
};
