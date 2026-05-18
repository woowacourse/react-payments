import { css } from "@emotion/react";
import Button from "@/components/Button/Button";
import CardListItemSkeleton from "./CardListItemSkeleton";

const CardListSkeleton = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 16px;
      `}
    >
      <CardListItemSkeleton />
      <CardListItemSkeleton />
      <CardListItemSkeleton />
      <Button isActivate={false}></Button>
    </div>
  );
};

export default CardListSkeleton;
