import Card from "@components/common/Card";
import useFormValue from "@components/common/FormContainer/useFormValue";
import styled from "@emotion/styled";
import { detectCardBrand } from "@utils/card";

import type { CardInfoFormState } from "../../formState";

const CardPreview = () => {
  const { getValue } = useFormValue<CardInfoFormState>();
  const cardNumber = getValue("cardNumber");
  const validityPeriod = getValue("validityPeriod");
  const company = getValue("selectedCardCompany");
  const brand = detectCardBrand(cardNumber);

  return (
    <Wrapper>
      <Card
        cardNumber={cardNumber}
        validityPeriod={validityPeriod}
        brand={brand}
        company={company}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4.8rem;
  padding-bottom: 2.8rem;
`;

export default CardPreview;
