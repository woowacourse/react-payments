import Button from "../common/Button";

interface ConfirmButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ConfirmButton({ onClick }: ConfirmButtonProps) {
  return <Button onClick={onClick}>확인</Button>;
}
