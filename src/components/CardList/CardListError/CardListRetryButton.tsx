import Button from "@/components/common/Button";
import type { ComponentProps } from "react";

interface CardListRetryButtonProps {
  onClick: ComponentProps<"button">["onClick"];
}

const CardListRetryButton = ({ onClick }: CardListRetryButtonProps) => {
  return (
    <Button type="button" onClick={onClick}>
      다시 시도
    </Button>
  );
};

export default CardListRetryButton;
