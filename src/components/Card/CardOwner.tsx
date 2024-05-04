import styled from "styled-components";
import CardNumber from "./CardNumber";

const Styled = {
  CardOwnerLayout: styled.div`
    display: flex;
    justifycontent: flex-start;
    height: 20px;
  `,
};

const CardOwner = ({ cardOwner }: { cardOwner: string[] }) => {
  return (
    <Styled.CardOwnerLayout>
      <CardNumber key="name" number={cardOwner} />
    </Styled.CardOwnerLayout>
  );
};

export default CardOwner;
