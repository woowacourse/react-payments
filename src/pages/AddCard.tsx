import Card from "../component/Card";
import Description from "../component/Description";
import InputGroup from "../component/InputGroup";
import styled from "styled-components";
import Input from "../component/Input";
import { InputContainer } from "../component/InputGroup";

const Label = styled.span`
  color: var(--color-black);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-body);
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 376px;
  padding: 30px;
  background-color: var(--color-white);
  padding-top: 77px;
  height: 700px;
  gap: 45px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AddCard = () => {
  const cardNumber = {
    first: 1111,
    second: 1111,
    third: 1111,
    fourth: 1111,
    MM: 12,
    YY: 25,
    CVC: 123,
  };

  //TODO: refactor : MM YY 그룹에서 관리하도록

  return (
    <Wrap>
      <Card cardNumber={cardNumber} cardType="visa" />
      <Form>
        <Description
          headText="결제할 카드 번호를 입력해 주세요."
          detailText="본인 명의의 카드만 결제 가능합니다."
        />
        <Container>
          <Label>카드 번호</Label>
          <InputGroup maxLength={4} placeholder="1111" inputCount={4} />
        </Container>
        <Description
          headText="카드 유효기간을 입력해 주세요"
          detailText="월/년도(MMYY)를 순서대로 입력해 주세요."
        />
        <Container>
          <Label>유효기간</Label>
          <InputContainer>
            <Input maxLength={2} placeholder="MM" isError={false} />
            <Input maxLength={2} placeholder="YY" isError={false} />
          </InputContainer>
        </Container>
        <Description headText="CVC 번호를 입력해 주세요" />
        <Container>
          <Label>CVC</Label>
          <InputGroup maxLength={3} placeholder="123" inputCount={1} />
        </Container>
      </Form>
    </Wrap>
  );
};

export default AddCard;
