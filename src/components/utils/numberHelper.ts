interface LimitNumberProps {
  value: string;
  maxLength: number;
}
export const limitNumberLength = ({ value, maxLength }: LimitNumberProps) => {
  return value.slice(0, maxLength);
};
