import styled from 'styled-components';

type CardListEmptyProps = {
  onAddCard: () => void;
};

const CardListEmpty = ({onAddCard}: CardListEmptyProps) => {
  return (
    <Container>
      <EmptyCard aria-hidden='true' />
      <Message>등록된 카드가 없습니다</Message>
      <Description>아래 버튼을 눌러 첫 카드를 등록해보세요</Description>
      <AddButton onClick={onAddCard}>카드 추가하기</AddButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 105px;
`;

const EmptyCard = styled.div`
  width: 160px;
  height: 100px;
  background-color: #f5f5f5;
  border: 1px dashed #d9d9d9;
  border-radius: 5px;
`;

const Message = styled.p`
  margin-top: 24px;
  color: #353c49;
  font-size: 18px;
  font-weight: 700;
`;

const Description = styled.p`
  margin-top: 8px;
  color: #8c8c8c;
  font-size: 12px;
`;

const AddButton = styled.button`
  width: 100%;
  height: 44px;
  margin-top: 32px;
  background-color: #333333;
  color: #ffffff;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
`;

export default CardListEmpty;
