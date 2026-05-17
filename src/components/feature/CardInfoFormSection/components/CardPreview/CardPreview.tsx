import Card from "@components/common/Card";
import styled from "@emotion/styled";
import { useFormValue } from "../../formContext";
import { detectCardBrand } from "@utils/card";


const CardPreview = () => {
  const { getValue } = useFormValue();
  const cardNumberUnits = getValue("cardNumber");
  const cardNumber = cardNumberUnits.join("");
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
