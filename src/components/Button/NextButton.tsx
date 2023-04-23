import Button from "../common/Button";

interface NextButtonProps {
  disabled: boolean;
}

export default function NextButton({ disabled }: NextButtonProps) {
  return <Button disabled={disabled}>다음</Button>;
}
