import Button from "../common/Button";

interface InformationButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function InformationButton({ onClick }: InformationButtonProps) {
  return (
    <Button
      type="button"
      onClick={onClick}
      width="27px"
      height="27px"
      border="1px solid #bababa"
      borderRadius="50%"
      fontSize="20px"
      fontWeight={500}
    >
      ﹖
    </Button>
  );
}
