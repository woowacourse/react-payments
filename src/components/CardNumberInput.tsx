import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  margin-bottom: 16px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`;

const SubTitle = styled.p`
  color: #8b95a1;
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
`;

const CardNumberInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  width: 100%;
`;

const InputLabel = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
`;

const Input = styled.input`
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid #acacac;
`;

function CardNumberInput() {
  return (
    <>
      <TitleContainer>
        <Title>결제할 카드 번호를 입력해 주세요.</Title>
        <SubTitle>본인 명의의 카드만 결제 가능합니다.</SubTitle>
      </TitleContainer>
      <CardNumberInputContainer>
        <InputLabel>카드 번호</InputLabel>
        <InputContainer>
          <Input type="number"></Input>
          <Input type="number"></Input>
          <Input type="number"></Input>
          <Input type="number"></Input>
        </InputContainer>
      </CardNumberInputContainer>
    </>
  );
}

export default CardNumberInput;
