import Card from "@components/common/Card";
import CardInfoForm from "@components/feature/CardInfoForm/CardInfoForm";
import styled from "@emotion/styled";
import { detectCardBrand } from "@utils/card";

const AddNewCardPage = () => {
  return (
    <PageWrapper>
      <CardInfoForm>
        {({ cardNumber, validityPeriod, selectedCardCompany }) => (
          <CardWrapper>
            <Card
              cardNumber={cardNumber.join("")}
              validityPeriod={validityPeriod}
              brand={detectCardBrand(cardNumber.join(""))}
              company={selectedCardCompany}
            />
          </CardWrapper>
        )}
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

export default AddNewCardPage;
