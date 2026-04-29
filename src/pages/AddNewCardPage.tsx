import styled from "@emotion/styled";
import Card from "../components/Card";
import CardCVCInputField from "../components/CardCVCInputField";
import CardNumberInputField from "../components/CardNumberInputField";
import CardValidityPeriodInputField from "../components/CardValidityPeriodInputField";

const AddNewCardPage = () => {
  return (
    <PageWrapper>
      <CardWrapper>
        <Card
          cardNumber={1234567812345678}
          validityPeriod={{ month: 4, year: 26 }}
        />
      </CardWrapper>
      <CardInfoForm>
        <CardNumberInputField />
        <CardValidityPeriodInputField />
        <CardCVCInputField />
      </CardInfoForm>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  max-width: 23rem;
  margin-inline: auto;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4.8rem;
  padding-bottom: 2.8rem;
`;

const CardInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default AddNewCardPage;
