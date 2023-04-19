import AppBar from "../../components/AppBar/AppBar";
import CardPreview from "../../components/CardPreview/CardPreview";
import CardNumberInput from "../../components/CardNubmerInput/CardNumberInput";
import CardOwnerNameInput from "../../components/CardOwnerNameInput/CardOwnerNameInput";
import CardExpirationDateInput from "../../components/CardExpirationDateInput/CardExpirationDateInput";
import CardSecurityCodeInput from "../../components/CardSecurityCodeInput/CardSecurityCodeInput";
import CardPasswordInput from "../../components/CardPasswordInput/CardPasswordInput";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../components/common";

const AddCardPage = () => {
  return (
    <Container>
      <AppBar title={"카드 추가"} leftChild={<Link to="/">〈</Link>} />
      <CardPreview />
      <Form>
        <CardNumberInput />
        <CardExpirationDateInput />
        <CardOwnerNameInput />
        <CardSecurityCodeInput />
        <CardPasswordInput />
        <ButtonBox>
          <Button>다음</Button>
        </ButtonBox>
      </Form>
    </Container>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;
`;

export default AddCardPage;
