import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CardPublicInfo } from "../../types/Card";
import CardItem from "../Card/CardItem";
import Title from "../common/Title";
import Button from "../common/Button";

interface CardCompletePageProps {
  getCardItem: (id: number) => CardPublicInfo | undefined;
}

const CardCompletePage = ({ getCardItem }: CardCompletePageProps) => {
  const { id } = useParams();
  const card = getCardItem(Number(id));

  return (
    <PageContainer>
      {card ? (
        <>
          <Title title="카드 등록이 완료되었습니다." size="large" />
          <CardItem card={card} />
        </>
      ) : (
        <Title title="카드 등록에 실패했습니다." size="large" />
      )}
      <ButtonContainer>
        <Button isActive>확인</Button>
      </ButtonContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 130px 27px;
`;

const ButtonContainer = styled.div`
  align-self: flex-end;
`;

export default CardCompletePage;
