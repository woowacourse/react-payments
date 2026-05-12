import Check from "@assets/Check.png";
import PageWrapper from "@components/common/PageWrapper";
import GoHomeButton from "@components/feature/GoHomeButton/GoHomeButton";
import CARD from "@constants/card";
import styled from "@emotion/styled";
import { useSearchParams } from "react-router";

const CARD_COMPANY_LABEL_MAP = Object.fromEntries(
  CARD.COMPANY_SELECT_FIELD.map(({ value, label }) => [value, label]),
);

const CardRegistrationCompletePage = () => {
  const [searchParams] = useSearchParams();
  const cardNumber = searchParams.get("card-number") ?? "";
  const cardCompany = searchParams.get("card-company") ?? "";

  const cardNumberPrefix = cardNumber.slice(0, 4);
  const cardCompanyLabel = CARD_COMPANY_LABEL_MAP[cardCompany] ?? "";

  return (
    <PageWrapper>
      <Wrapper>
        <CheckIcon src={Check} alt="Check" />
        <Description>{cardNumberPrefix}로 시작하는</Description>
        <Description>{cardCompanyLabel}가 등록되었어요.</Description>
        <GoBackButtonContainer>
          <GoHomeButton />
        </GoBackButtonContainer>
      </Wrapper>
    </PageWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CheckIcon = styled.img`
  width: 4.75rem;
  height: 4.75rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 1rem 0 0 0;
`;

const GoBackButtonContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

export default CardRegistrationCompletePage;
