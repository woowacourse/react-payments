import styled from '@emotion/styled';

export default function EmptyCardList({ onClick }: { onClick: () => void }) {
  return (
    <Container>
      <Card />
      <Title>등록된 카드가 없습니다</Title>
      <HintText>아래 버튼을 눌러 첫 카드를 등록해보세요</HintText>
      <RegisterButton onClick={onClick}>카드 추가하기</RegisterButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 320px;
  height: 330px;
  padding-top: 100px;
`;

const Card = styled.div`
  width: 160px;
  height: 100px;
  border: 1px dashed #d9d9d9;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

const Title = styled.strong`
  font-size: 20px;
  font-weight: 700;
  color: #353c49;
`;

const HintText = styled.strong`
  font-size: 12px;
  font-weight: 400;
  color: #8c8c8c;
`;

const RegisterButton = styled.button`
  width: 320px;
  height: 44px;
  border-radius: 5px;
  background-color: #333;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
`;
